import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";
import { generateAccessToken, generateRefreshToken } from "../config/jwt.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = decoded.userId;
      next();
    } catch (error) {
      const refreshToken = req.cookies.refreshToken;

      if (!refreshToken) return res.status(401).json({ message: "Unauthorized" });

      const decodedRefreshToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

      const userId = decodedRefreshToken.userId;
      req.userId = userId;
      const version = decodedRefreshToken.version;

      const storedRefreshToken = await prisma.refreshToken.findUnique({
        where: {
          token: refreshToken,
          version,
          userId
        }
      });

      if (!storedRefreshToken) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      await prisma.refreshToken.delete({
        where: {
          token: refreshToken
        }
      });

      const newRefreshToken = await generateRefreshToken(userId);
      const accessToken = generateAccessToken(userId);

      res.cookie("accessToken", accessToken, { httpOnly: true });
      res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

      next();
    }
  } catch (error) {
    res.status(403).json({ message: "Token Expired or Invalid" });
  }
};


