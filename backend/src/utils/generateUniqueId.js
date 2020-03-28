const crypto = require('crypto'); // pacote do node de cryptografia

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}