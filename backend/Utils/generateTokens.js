import jwt from 'jsonwebtoken';

const sendToken = (userId,res) =>{
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET not set");
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'10d'
    });

    res.cookie("jwt",token,{
        maxAge:10*24*60*60*1000,
        httpOnly: true,
        sameSite:'lax',
        secure: process.env.NODE_ENV !== "development"
    })
    return token;
};

export default sendToken;