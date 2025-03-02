

export const authMiddleware = (req,res,next) =>{
    try {
        
    } catch (error) {
        console.log("error in auth middleware",error);
        res.status(500).json({
            message :"Something went wrong"
        })
    }
}