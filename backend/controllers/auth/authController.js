const User = require('../../models/user');
const { generateToken } = require('../../utils/token')
// register user
const register = async (req,res)=>{
    console.log(req.body)
    try{
        const { username, password, mail } = req.body;
        
        // check if user exists
        const userExists = await User.exists({ mail:mail.toLowerCase() })
        if(userExists){
            return res.status(409).json({
                error: 'Email already in use'
            })
        }
        const user = await User.create({
            username,
            password,
            mail: mail.toLowerCase(),
        })

        const token =  generateToken(user);
        res.status(201).json({
            user:{
                id:user._id,
                mail:user.mail,
                token
            }
        })
    }catch(error){
        return res.status(500).json({
            error: 'Error occured. Please try again'
        });
    }
}

// login user 
const login = async (req,res)=>{
    console.log('salam')
    try{
        const { mail, password } = req.body;
        console.log(req.body);
        const user = await User.findOne({
            mail: mail.toLowerCase()
        });
        if(user && await user.comparePassword(password)){
            const token = generateToken(user)

            return res.status(200).json({
                user:{
                    id:user._id,
                    mail:user.mail,
                    token
                }
            })
        }
        return res.status(400).json({
            error:'Invalid credentials. Please try again'
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            error:error 
        })
    }
}


module.exports = {
    login,
    register
}