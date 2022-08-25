const Joi = require('joi')
const invitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required()
})
module.exports = {
    invitationSchema,
    inviteDecisionSchema
}