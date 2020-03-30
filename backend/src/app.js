// importa o mini framework express
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

// armazena a aplicação
const app = express();

app.use(cors());
app.use(express.json());    // informa para o app express o formato json para converter o corpo das requisições em objeto js
app.use(routes);
app.use(errors());

// localhost:3333
module.exports = app;
