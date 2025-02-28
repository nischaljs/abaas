import express from "express"

const router = express.Router();


router.get('/test',(req,res)=>{
    res.send("hello the auth route is working fine ")
})


export default router;