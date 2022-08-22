const invitation = require('../../models/invitation');
const User = require('../../models/user')
const postInvitation = async (req, res) => {
    const {targetMailAddress} = req.body;
    const { userId, mail} = req.user;

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
    const invitationAlreadyReceived  = await invitation.findOne({
        
    })
    return res.send('Controller is working')
}


exports.postInvitation = postInvitation;