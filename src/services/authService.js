const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const SECRET = 'asd;kl2345 m,g345 ,.asdf';

// TODO: Check if user exist
exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    // Get user from DB
    const user = await User.findOne({ email });

    // Check if user exist
    if (!user) {
        throw new Error('Cannot find email or password!');
    }

    // Check if password is valid
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Cannot find email or password!');
    }

    // Generate JWT token
    const payload = {
        _id: user._id,
        email: user.email,
    }
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

    // return token
    return token;
};