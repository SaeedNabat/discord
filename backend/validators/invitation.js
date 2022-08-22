const Joi = require('joi')
const invitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})


exports.invitationSchema = invitationSchema;