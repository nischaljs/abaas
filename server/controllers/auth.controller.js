import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../prismaClient";


const generateJwtToken = async ({ id, email }) => {
    const token = jwt.sign({ id, email }, process.env.JSON_WEB_TOKEN_SECRET);
    return token;
}


const generateHashPassword = async (rawPassword) => {
    const hashedPassword = bcrypt.hash(rawPassword, 10);
    return hashedPassword;
}



export const registerController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = prisma.user.findUnique({
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
        });

        const token = await generateJwtToken({ id: user.id, email: user.email });

        res.status(201).json({ user, token });
    } catch (error) {
        console.log("error while creating the user", error);
        res.staus(500).json({ message: "something went wrong" });
    }
}

export const loginController = () => {

}
export const logoutController = () => {

}