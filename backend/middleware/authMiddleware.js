import jwt from 'jsonwebtoken';

const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).send({message:"Access Denied"});
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log("Error has occured in the authentication middleware",error);
        res.status(500).json({error:"Internal Server Error"});
    }
};

export default protectRoute;