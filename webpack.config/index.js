require('babel-register');

const ENV = process.env.NODE_ENV || 'development';
const CONFIG = require(`./${ENV}`);

module.exports = CONFIG;
