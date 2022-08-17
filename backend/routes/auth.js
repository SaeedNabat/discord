const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const {login,register} = require('../controllers/auth/authController');
const { isAuthenticated } = require('../middlewares/auth');
const {loginSchema,registerSchema} = require('../validators/auth')
router.route('/register').post(validator.body(registerSchema),register);

router.route('/login').post(validator.body(loginSchema),login);

router.route('/test').get(isAuthenticated,(req,res)=>{
    res.send('test')
})
module.exports = router;