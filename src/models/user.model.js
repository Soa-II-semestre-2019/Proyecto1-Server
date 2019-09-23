const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema({
    usuario: {type: String},
    email: {type: String},
    password: {type: String}
});

UserSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);