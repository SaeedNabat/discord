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

module.exports = {
    updatePeoplePendingInvitations
}