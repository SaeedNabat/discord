const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    mail: { type:String, unique: true },
    username: { type: String },
    password: { type: String }
},{
    toJSON:{
        transform:(doc,ret)=>{
        delete ret._id,
        delete ret.password,
        delete ret.__v
        }
    }
});
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User',userSchema);