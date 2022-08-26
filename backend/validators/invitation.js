const Joi = require('joi')
const invitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})

const inviteDecisionSchema = Joi.object({
    socketId: Joi.string().required()
})
module.exports = {
    invitationSchema,
    inviteDecisionSchema
}