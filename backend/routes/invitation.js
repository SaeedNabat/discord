const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const {postInvitation} = require('../controllers/invite/invite') 
const {invitationSchema} = require('../validators/invitation')
const { isAuthenticated } = require('../middlewares/auth')
router.route('/invite').post(isAuthenticated,validator.body(invitationSchema),
postInvitation)

module.exports = router;