const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const {postInvitation, acceptInvitation, rejectInvitation} = require('../controllers/invite/invite') 
const {invitationSchema, inviteDecisionSchema} = require('../validators/invitation')
const { isAuthenticated } = require('../middlewares/auth')
router.route('/invite').post(isAuthenticated,validator.body(invitationSchema),
postInvitation)

router.route('/accept').post(isAuthenticated,validator.body(inviteDecisionSchema),acceptInvitation)


router.route('/reject').post(isAuthenticated,validator.body(inviteDecisionSchema),rejectInvitation)
module.exports = router;