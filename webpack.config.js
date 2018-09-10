'Use strict';
const entries = require('./config/webpack.entries');
module.exports = [];
module.exports.push(entries.createClientEntry());
module.exports.push(entries.createServerEntry());