const Message = require('../models/message');
const Conversation = require('../models/conversation')
const chatUpdates = require('./updates/chat')
const directMessageHandler = async (socket, data) => {
    try {
        console.log(' event is  being handled')
        const { id } = socket.user;
        const { receiverUserId, content } = data;

        // create new message
        const message = await Message.create({
            content: content,
            author: id,
            date: new Date(),
            type: 'DIRECT'
        })

        // find if conversation exist with this two users - if not create new
        const conversation = await Conversation.findOne({
            participants: { $all: [id, receiverUserId] }
        })
        if(conversation) {
            conversation.messages.push(message._id);
            await conversation.save();

            // perform and update to sender and receiver if is online
            chatUpdates.updateChatHistory(conversation._id.toString());

        }else{
            // create new conversation if not exists
            console.log('here error !')
            const newConversation = await Conversation.create({
                messages: [message._id],
                participants: [id, receiverUserId] ,
            })

            // perform and update to sender and receiver if is online
            chatUpdates.updateChatHistory(newConversation._id.toString());
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = directMessageHandler;