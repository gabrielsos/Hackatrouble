const crypto = require('crypto')

module.exports = function randomDigits(){
    const password = crypto.randomBytes(8).toString('HEX');
    return password;
}