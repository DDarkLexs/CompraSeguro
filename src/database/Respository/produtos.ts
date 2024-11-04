import { knex } from '../index'; // Adjust the import path as necessary

class ProdutoRepository {
  async getAllProdutos(): Promise<IProdutos[]> {
    return await knex('Produtos').orderBy('created', 'desc').select('*');
  }

  async getProdutoById(id_produto: number): Promise<IProdutos> {
    return await knex('Produtos').where({ id_produto }).first();
  }

  async createProduto(produto: IProdutos): Promise<IProdutos> {
    const response = await knex('Produtos').insert(produto);
    return await knex('Produtos').where({ id_produto: response }).first();
  }

  async updateProduto(id_produto: number, produto: IProdutos): Promise<IProdutos> {
    const response = await knex('Produtos').where({ id_produto }).update(produto);
    return await knex('Produtos').where({ id_produto: response }).first();
  }

  async deleteProduto(id_produto: number): Promise<number> {
    return await knex('Produtos').where({ id_produto }).del();
  }
}

export default new ProdutoRepository();

