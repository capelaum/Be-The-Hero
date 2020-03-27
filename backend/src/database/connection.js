const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);     // conexao com knexfile.js

module.exports = connection;