import { knex } from '../index'; // Adjust the import path as necessary

class ProdutoRepository {
  async getAllProdutos(): Promise<IProdutos[]> {
    return await knex('Produtos')
    .orderBy('created', 'desc')
    .select('*');
  }
  async getAllProdutosByCompra(id_compra: number): Promise<IProdutos[]> {
    return await knex('Produtos')
    .orderBy('created', 'desc')
    .select('*').where('id_compra', id_compra);
  }

  async getProdutoById(id_produto: number): Promise<IProdutos> {
    return await knex('Produtos').where({ id_produto }).first();
  }

  async createProduto(produto: IprodutoDto, id_compra: number): Promise<IProdutos> {
    const response = await knex('Produtos').insert({...produto, id_compra});
    // console.log(response)
    return await knex('Produtos').orderBy('id_produto', 'desc').first();
  }

  async updateProduto(id_produto: number, produto: IProdutos): Promise<IProdutos> {
    const { id_compra,updated,created, ...$produto } = produto;
    const response = await knex('Produtos').where({ id_produto }).update($produto);
    return await knex('Produtos').where({ id_produto }).first();
  }

  async deleteProduto(id_produto: number): Promise<number> {
    return await knex('Produtos').where({ id_produto }).del();
  }
}

export default new ProdutoRepository();

