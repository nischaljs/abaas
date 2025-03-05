import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../prismaClient.js";
import { generateAccessToken, generateRefreshToken } from "../config/jwt.js";





const generateHashPassword = async (rawPassword) => {
    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    return hashedPassword;
}



export const registerController = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { username, email, password: hashedPassword },
      });
  
      const accessToken = generateAccessToken(user.id);
      const refreshToken = await generateRefreshToken(user.id);
  
      res.cookie("accessToken", accessToken, { httpOnly: true });
      res.cookie("refreshToken", refreshToken, { httpOnly: true });
  
      res.status(201).json({ message: "User Registered" });
    } catch (error) {
      console.error("Register Error:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!existingUser) {
            return res.status(401).json({ message: "Either email or password is wrong" });
        }
        const passwordVerification = await bcrypt.compare(password, existingUser.password);
        if (!passwordVerification) {
            return res.status(401).json({ message: "Either email of password is wrong" });
        }

        const accessToken = generateAccessToken(existingUser.id);
        const refreshToken = await generateRefreshToken(existingUser.id);
    
        res.cookie("accessToken", accessToken, { httpOnly: true });
        res.cookie("refreshToken", refreshToken, { httpOnly: true });
    
    
     res.status(200).json({ user: { username: existingUser.username, email }, token });

    } catch (error) {
        console.error("error while logging in ", error);
        res.status(500).json({ message: "Internal server error" });
    }

}
export const logoutController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
  
    if (refreshToken) {
      await prisma.refreshToken.delete({
        where: { token: refreshToken },
      });
    }
  
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
  
    res.status(200).json({ message: "Logged Out Successfully" });
  };
  


export const refreshController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
  
    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
    });
  
    if (!storedToken) {
      return res.status(403).json({ message: "Invalid Refresh Token" });
    }
  
    try {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const newAccessToken = generateAccessToken(decoded.userId);
      const newRefreshToken = await generateRefreshToken(decoded.userId);
  
      // Blacklist Old Refresh Token
      await prisma.refreshToken.delete({
        where: { token: refreshToken },
      });
  
      res.cookie("accessToken", newAccessToken, { httpOnly: true });
      res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
      res.status(200).json({ message: "Token Refreshed" });
    } catch (error) {
      res.status(403).json({ message: "Invalid Refresh Token" });
    }
  };
  