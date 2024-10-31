import { knex } from '../index'; // Adjust the import path as necessary

class CompraRepository {
  async getAllCompras(): Promise<ICompras[]> {
    return await knex('Compras').select('*');
  }

  async getCompraById(id_compra: number): Promise<ICompras> {
    return await knex('Compras').where({ id_compra }).first();
  }

  async createCompra(compra: ICreateCompra): Promise<ICompras> {
      const response = await knex('Compras').insert(compra);
    return await knex('Compras').where({ id_compra: response[0] }).first();
  }

  async updateCompra(id_compra: number, compra: ICompras): Promise<ICompras> {
      const response = await knex('Compras').where({ id_compra }).update(compra);
    return await knex('Compras').where({ id_compra: response }).first();
  }

  async deleteCompra(id_compra: number): Promise<number> {
    return await knex('Compras').where({ id_compra }).del();
  }
}

export default new CompraRepository();


