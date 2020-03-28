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

// ouvir a porta 3333 - localhost:3333
app.listen(3333);


/* 
*   Rota /Recurso
*
*   Métodos HTTP:
*
*   GET: Buscar/Listar uma info do back-end
*   POST: Criar um info no back-end
*   PUT: Alterar uma info no back-end
*   DELETE: Deleter uma info do back-end
*
*
    Tipos de parametros:
    
    Query: Parametros nomeados na rotaapos o '?' (Filtros/Paginação)
    Route: Utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

    SQL - MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL
    NoSQL - MongoDB, CouchDB

    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where() - KNEX.js

*/