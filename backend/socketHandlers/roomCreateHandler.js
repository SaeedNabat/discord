const serverStore = require('../serverStore');

const roomCreateHandler = socket => {
    console.log('handling room create event')
    const socketId = socket.id;
    const userId = socket.user.id

    const roomDetails = serverStore.addNewActiveRoom(userId, socketId)


    socket.emit('room-create', {
        roomDetails
    })
}

module.exports = roomCreateHandler;