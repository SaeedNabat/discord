const jwt = require('jsonwebtoken')


const config = process.env;

const verifyTokenSocket = (socket, next) => {
    const token = socket.handshake.auth?.token;

    try {
        const decoded = jwt.verify(token, config.JWT_KEY)
        socket.user = decoded;
    } catch (error) {
        console.log(error);
        const socketError = new Error('NOT_AUTHORIZED')
        return next(socketError);
    }
    next();
}

module.exports = verifyTokenSocket;