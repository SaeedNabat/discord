const Invitation = require('../../models/invitation');
const User = require('../../models/user')
const peopleUpdates = require('../../socketHandlers/updates/people')
const postInvitation = async (req, res) => {
    const {targetMailAddress} = req.body;
    const { id, mail} = req.user;

    //check if friend that we would like to invite is not user 

    if(mail.toLowerCase() === targetMailAddress.toLowerCase()){
        return res.status(409).json({
            error: 'sorry. You cannot become friend with yourself'
        })
    }
    const targetUser = await User.findOne({
        mail: targetMailAddress.toLowerCase()
    })
    if(!targetUser) {
        return res.status(404).json({
            data: `Friend of ${targetMailAddress} has not been found.Please check mail address`
        })
    }

    // check if invitation has been already sent
    const invitationAlreadyReceived  = await Invitation.findOne({
        senderId: id,
        receiverId: targetUser._id
    })
    if(invitationAlreadyReceived) {
        return res.status(409).json({
            data: 'Invitation has been already sent'
        })
    }
    // check if the user which we would like to invite is already our friend
    const usersAlreadyFriends = targetUser.friends.find(friendId => friendId.toString() === id.toString());
    if (usersAlreadyFriends) {
        return res.status(409).json({
            data: 'Friend already added.Please check friends list'
        })
    }

    // create new invitation in database
    console.log(id);
    const newInvitation = await Invitation.create({
        senderId: id,
        receiverId: targetUser._id
    })

    // if invitation has been sucessfully created we would like to update friends invitation if other user is online

    //send pending invitations update to specific user

    peopleUpdates.updatePeoplePendingInvitations(targetUser._id.toString());
    return res.status(201).json({
        data: 'invitation has been sent'
    })
}

const acceptInvitation = (req,res) => {
    return res.send('accept handler')
}


const rejectInvitation = async (req,res) => {
    try {
        const { socketId } = req.body;
        const { id } = req.user;
        // remove that invitation from person invitations collection
        const invitationExists = await Invitation.exists({
            _id: user
        })
        if(invitationExists) { 
            await Invitation.findByIdAndDelete(socketId);
        }

        // update pending invitations
        peopleUpdates.updatePeoplePendingInvitations(id)

        return res.status(200).json({
            data: 'invitation rejected succesfully'
        })
    } catch (error) {
        return res.status(500).json({
            error: 'something went wrong please try again'
        })
    }
}

module.exports = {
    postInvitation,
    acceptInvitation,
    rejectInvitation
};