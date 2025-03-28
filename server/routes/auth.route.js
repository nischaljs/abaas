import express from "express"
import { loginController, logoutController, registerController, logOutOfAllDevicesController } from "../controllers/auth.controller.js";

const router = express.Router();


router.get('/test',(req,res)=>{
    res.send("hello the auth route is working fine ")
})

router.post('/register',registerController);

router.post('/login',loginController);

router.post('/logout', logoutController);

router.post('/logout-all', logOutOfAllDevicesController);

export default router;