const jwt = require('jsonwebtoken')

module.exports.generateToken = (user) => {
    const token = jwt.sign({
        id:user._id,
        mail:user.mail
    },process.env.JWT_KEY,
    {
        expiresIn:'24h'
    });
    return token;
}