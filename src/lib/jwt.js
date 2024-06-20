const util = require('util');
const jwt = require('jsonwebtoken');

function sign(payload, secretOrPrivateKey, options = {}) {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });
    return promise;
}

// migrate from callback to promise
const verify = util.promisify(jwt.verify); //migrate function verify and turn to promise version
                                            

module.exports = {
    sign,
    verify,
};