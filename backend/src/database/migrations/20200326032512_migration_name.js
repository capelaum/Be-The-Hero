// Cria tabela
exports.up = function(knex) {

    return knex.schema.createTable('ongs_2', function (table) {

        table.string('id').primary();
        table.string('name2').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

    });
};

// Deleta tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs_2');
};
