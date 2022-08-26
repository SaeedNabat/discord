const serverStore = require('../serverStore');
const peopleUpdate = require('../socketHandlers/updates/people')

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;
    console.log(socket.user.id)
    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.id
    })

    // update pending people invitation list
    peopleUpdate.updatePeoplePendingInvitations(userDetails.id);

    // update people list
    peopleUpdate.updatePeople(userDetails.id)
}

module.exports = newConnectionHandler;