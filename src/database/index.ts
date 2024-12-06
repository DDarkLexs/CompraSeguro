import ExpoSQLiteDialect from '@expo/knex-expo-sqlite-dialect';
import Knex from 'knex';

const knex = Knex({
  client: ExpoSQLiteDialect as any,
  connection: {
    filename: 'compraSeguro.db',
  },
  migrations: {
    directory: './migrations/index.ts',
  },
  useNullAsDefault: true,
});
knex.raw('PRAGMA foreign_keys = ON;').then(() => {
  console.log('verificação de chave estrangeira ativada!');
});


export {knex}