import {knex} from '..';
import {Status} from '../../constants/enums';

const createSchema = async () => {
    if (!(await knex.schema.hasTable('Compras'))) {
        await knex.schema
            .createTable('Compras', (table) => {
                table.increments('id_compra').primary();
                table.string('nome', 80).notNullable();
                    table.string('status', 20).defaultTo(Status.PENDING).notNullable();
                    table.text('descricao');
                    table.float('total', 10, 2).defaultTo(0); // Será calculado automaticamente
                    table.timestamp('created').defaultTo(knex.fn.now());
                    table.timestamp('updated').defaultTo(knex.fn.now());            })
            .then((a) => {
                console.log(a);
            });
    }
    if (!(await knex.schema.hasTable('Produtos'))) {
        await knex.schema
            .createTable('Produtos', (table) => {
                table.increments('id_produto', {primaryKey: true}).primary();
                table.string('nome', 80).notNullable();
                table.float('preco', 10, 2).defaultTo(0);
                table.integer('qtd', 5).unsigned().defaultTo(0);
                table.boolean('comprado').defaultTo(false);
                table.float('total', 10, 2).defaultTo(0);
                table.timestamp('created').defaultTo(knex.fn.now());
                table.timestamp('updated').defaultTo(knex.fn.now());
                table
                    .integer('id_compra', 5)
                    .unsigned()
                    .references('id_compra')
                    .inTable('Compras')
                    .onDelete('cascade')
                    .onUpdate('cascade');
            })
            .then((a) => {
                console.log(a);
            });
    }
    if (!(await knex.schema.hasTable('notificacoes'))) {
        await knex.schema
            .createTable('notificacoes', (table) => {
                table.increments('id').primary();
                table.string('titulo', 100).notNullable();   
                table.text('mensagem').notNullable();
                table.boolean('lida').defaultTo(false);
                table.timestamp('created').defaultTo(knex.fn.now());
                table.timestamp('updated').defaultTo(knex.fn.now());
            })
            .then((a) => {
                console.log(a);
            });
    }
    await knex
        .raw(
            ` 
    CREATE TRIGGER IF NOT EXISTS calcular_preco_total_insert
    AFTER INSERT ON Produtos
    FOR EACH ROW
    WHEN NEW.qtd IS NOT NULL AND NEW.preco IS NOT NULL
    BEGIN
      UPDATE Produtos
      SET total = NEW.preco * NEW.qtd
      WHERE id_produto = NEW.id_produto;
    END;
    CREATE TRIGGER IF NOT EXISTS calcular_preco_total_update
    AFTER UPDATE ON Produtos
    FOR EACH ROW
    WHEN NEW.qtd IS NOT NULL AND NEW.preco IS NOT NULL
    BEGIN
      UPDATE Produtos
      SET total = NEW.preco * NEW.qtd
      WHERE id_produto = NEW.id_produto;
    END;
      `,
        )
        .then((a) => {
            console.log(a);
        });
    await knex
        .raw(
            `
-- Trigger para atualizar o total de uma compra ao deletar um produto
CREATE TRIGGER IF NOT EXISTS atualizar_total_compra_delete
AFTER DELETE ON Produtos
FOR EACH ROW
WHEN OLD.id_compra IS NOT NULL
BEGIN
  -- Atualiza o total da compra após a exclusão do produto
  UPDATE Compras
  SET total = COALESCE((SELECT SUM(P.total) FROM Produtos AS P WHERE P.id_compra = OLD.id_compra), 0)
  WHERE id_compra = OLD.id_compra;
END;


`,
        ).catch((e) => {
            console.error(e);
        });
    await knex
        .raw(
            `
            -- Trigger para atualizar o total de uma compra ao inserir um novo produto
CREATE TRIGGER IF NOT EXISTS atualizar_total_compra_insert
AFTER INSERT ON Produtos
FOR EACH ROW
WHEN NEW.id_compra IS NOT NULL
BEGIN
  -- Atualiza o total do produto recém-adicionado
  UPDATE Produtos
  SET total = NEW.preco * NEW.qtd
  WHERE id_produto = NEW.id_produto;
  
  -- Atualiza o total da compra e a data de atualização
  UPDATE Compras
  SET 
    total = (SELECT SUM(P.total) FROM Produtos AS P WHERE P.id_compra = NEW.id_compra),
    updated = CURRENT_TIMESTAMP
  WHERE id_compra = NEW.id_compra;
END;

-- Trigger para atualizar o total de uma compra ao atualizar um produto existente
CREATE TRIGGER IF NOT EXISTS atualizar_total_compra_update
AFTER UPDATE ON Produtos
FOR EACH ROW
WHEN NEW.id_compra IS NOT NULL
BEGIN
  -- Atualiza o total do produto modificado
  UPDATE Produtos
  SET total = NEW.preco * NEW.qtd
  WHERE id_produto = NEW.id_produto;

  -- Recalcula o total da compra e atualiza a data de alteração
  UPDATE Compras
  SET 
    total = (SELECT SUM(P.total) FROM Produtos AS P WHERE P.id_compra = NEW.id_compra),
    updated = CURRENT_TIMESTAMP
  WHERE id_compra = NEW.id_compra;
END;

`,
        )
        .then((a) => {
            console.log(a);
        }).catch((err) => console.log(err));
};

const dropTablesAndTriggers = async () => {
    try {
        await knex.schema.dropTableIfExists('compras').then(() => {
            console.log('Tabela "compras" excluida com sucesso!');
        });
        await knex.schema.dropTableIfExists('notificacoes').then(() => {
            console.log('Tabela "notificacoes" excluida com sucesso!');
        });
        await knex.schema.dropTableIfExists('produtos').then(() => {
            console.log('Tabela "produtos" excluida com sucesso!');
        });
        await knex
            .raw('DROP TRIGGER IF EXISTS calcular_preco_total_insert')
            .then(() => {
                console.log(
                    'Tabela "calcular_preco_total_insert" excluida com sucesso!',
                );
            });
        await knex
            .raw('DROP TRIGGER IF EXISTS calcular_preco_total_update')
            .then(() => {
                console.log(
                    'Tabela "calcular_preco_total_update" excluida com sucesso!',
                );
            });
        await knex
            .raw('DROP TRIGGER IF EXISTS atualizar_total_compra_insert')
            .then(() => {
                console.log(
                    'Tabela "atualizar_total_compra_insert" excluida com sucesso!',
                );
            });
        await knex
            .raw('DROP TRIGGER IF EXISTS atualizar_total_compra_update')
            .then(() => {
                console.log(
                    'Tabela "atualizar_total_compra_update" excluida com sucesso!',
                );
            });
        await knex
            .raw('DROP TRIGGER IF EXISTS atualizar_total_compra_delete')
            .then(() => {
                console.log(
                    'Tabela "atualizar_total_compra_delete" excluida com sucesso!',
                );
            });

        console.log('Tabelas e triggers foram excluidas com sucesso!');
    } catch (error) {
        console.warn('Erro ao excluir tabelas:', error);
    }
};

// Chame a função para executar o drop das tabelas
// dropTables();
export {createSchema, dropTablesAndTriggers};
