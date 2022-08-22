import io from 'socket.io-client'

let socket = null;
export const connectWithSocketServer = (user) => {
    const jwtToken = user.token;
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken
        }
    })

    socket.on('connect', () => {
        console.log('succesfully connected with socket.io server')
        console.log(socket.id)
    })
}