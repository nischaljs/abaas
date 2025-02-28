import express from "express";
import authRouter from "./routes/auth.route.js";


const app = express();
app.use(express.json());

app.use('/api/v1/auth',authRouter);


app.listen(8800, () =>{
    console.log("Server is running !");
})