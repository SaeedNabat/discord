const User = require('../../models/user')
const Invitation = require('../../models/invitation');

const serverStore = require('../../serverStore')

const updatePeoplePendingInvitations = async (userId) => {
    try {
        const pendingInvitations = await Invitation.find({
            receiverId: userId,
        }).populate('senderId', '_id username mail');

        console.log(pendingInvitations)
        // find all actice connections of specific userId

        const receiverList = serverStore.getActiveConnections(userId);

        const io = serverStore.getSocketServerInstance();
        
        receiverList.forEach(receiverSocketId => {
            io.to(receiverSocketId).emit('people-invitations',{
                pendingInvitations: pendingInvitations ? pendingInvitations: []
            })
        })


    } catch (error) {
        console.log(error)
    }

}

const updatePeople = async (userId) => {
    try {
        // find active connections of specific id (online users)

        const receiverList = serverStore.getActiveConnections(userId)

        if(receiverList.length > 0) {
            const user = await User.findById(userId, {_id: 1, friends: 1}).populate('friends', '_id username mail');

            if(user) {
                const peopleList = user.friends.map(f => {
                    return {
                        id: f._id,
                        mail: f.mail,
                        username: f.username
                    }
                })
    
        
    
                // get io server instance 
                const io = serverStore.getSocketServerInstance();
                receiverList.forEach(receiver=> {
                    io.to(receiver).emit('people-list', {
                        people: peopleList? peopleList: []
                    })
                })
            }
        }
    
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    updatePeoplePendingInvitations,
    updatePeople
}