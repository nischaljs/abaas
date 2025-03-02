import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";


const app = express();
app.use(cookieParser());
app.use(express.json());

app.use('/api/v1/auth',authRouter);


app.listen(3000, () =>{
    console.log("Server is running fine  !");
})