const { Schema, model} = require ('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    // rePassword: {
    //     type: String,
    //     require: true,
    // }
});

const User = model('User', userSchema);

module.exports = User;