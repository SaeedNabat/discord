const Conversation = require('../models/conversation')
const chatUpdates = require('./updates/chat')

const directChatHistoryHandler = async (socket, data) => {
    try {

        const { id } = socket.user;
        const { receiverUserId } = data;

        const conversation = await Conversation.findOne({
            participants: { $all: [id, receiverUserId]},
            type: 'DIRECT'
        })
        if(conversation) {
            chatUpdates.updateChatHistory(conversation._id.toString(), socket.id)
            console.log(socket.id)

        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = directChatHistoryHandler;