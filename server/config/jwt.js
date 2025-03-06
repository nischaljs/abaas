import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";
import { v4 as uuidv4 } from 'uuid';

export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = async (userId) => {
  const version = uuidv4();
  const refreshToken = jwt.sign({ userId, version }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      version,
      userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return refreshToken;
};
