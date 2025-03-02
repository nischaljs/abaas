import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../prismaClient.js";


const generateJwtToken = async ({ id, email }) => {
    const token = jwt.sign({ id, email }, process.env.JSON_WEB_TOKEN_SECRET);
    return token;
}


const generateHashPassword = async (rawPassword) => {
    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    return hashedPassword;
}


const CookieAge = 1000 * 60 * 60 * 24 * 7;


export const registerController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await generateHashPassword(password);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
            omit: {
                password
            }
        });

        const token = await generateJwtToken({ id: user.id, email: user.email });

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: CookieAge
        }).status(201).json({ user, token });
    } catch (error) {
        console.error("error while creating the user", error);
        res.staus(500).json({ message: "something went wrong" });
    }
}

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

        const token = generateJwtToken({ id: existingUser.id, email });



        res.cookie("token", token, {
            httpOnly: true,
            maxAge: CookieAge
        }).status(201).json({ user: { username: existingUser.username, email }, token });

    } catch (error) {
        console.error("error while logging in ", error);
        res.status(500).json({ message: "Internal server error" });
    }

}
export const logoutController = () => {

}