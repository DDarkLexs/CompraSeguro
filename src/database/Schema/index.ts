import { knex } from "..";


// knex.schema
//   .createTableIfNotExists('products', (table) => {
//     table.increments('id').primary();
//     table.string('name', 50).notNullable();
//     table.decimal('price', 10, 2).notNullable();
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.timestamp('updated_at').defaultTo(knex.fn.now());
//   })
//   .createTableIfNotExists('categories', (table) => {
//     table.increments('id').primary();
//     table.string('name', 50).notNullable();
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.timestamp('updated_at').defaultTo(knex.fn.now());
//   }).then((a) => {
//     console.log(a);
//   }).catch((error) => {
//    // console.warn(error);
//   });



  const dropTables = async () => {
    try {
      await knex.schema.dropTableIfExists('products');
      await knex.schema.dropTableIfExists('categories');
      console.log('Tabelas excluídas com sucesso!');
    } catch (error) {
      console.warn('Erro ao excluir tabelas:', error);
    }
  };
  
  // Chame a função para executar o drop das tabelas
  dropTables();