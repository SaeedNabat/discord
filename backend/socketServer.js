const authSocket = require('./middlewares/authSocket')
const newConnectionHandler = require('./socketHandlers/newConnectionHandler')
const disconnectHandler = require('./socketHandlers/disconnectHandler')
const registerSocketServer = (server)=>{
    const io = require('socket.io')(server, {
        cors : {
            origin: '*',
            methods: ['GET', 'POST']
        }
    })

    io.use((socket, next) => {
        authSocket(socket, next);
    })
    io.on('connection', socket => {
        console.log('user connected')
        console.log(socket.id)

        // new connection handler
        newConnectionHandler(socket, io)

        socket.on('disconnect', () => {
            console.log('disconncted')
            disconnectHandler(socket)
        })
    })
}

module.exports = {
    registerSocketServer
}