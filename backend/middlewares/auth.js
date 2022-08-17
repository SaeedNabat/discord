const jwt = require('jsonwebtoken');
const isAuthenticated = (req,res,next)=>{
    let token = req.body.token || req.query.token || req.headers['authorization'];
    if(!token){
        return res.status(403).json({
            error:"A token is required for authentication"
        });
    }
        
        try{
            token = token.replace(/^Bearer\s+/,"");
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            console.log(decoded);
            req.user = decoded;
        }catch(error){
            return res.status(401).json({
                error:"Invalid Token"
            });
    }
    return next();
}
module.exports = {
    isAuthenticated
}