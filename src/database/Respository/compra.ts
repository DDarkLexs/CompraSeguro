import { Status } from '../../constants/enums';
import { knex } from '../index'; // Adjust the import path as necessary

class CompraRepository {
  async getAllCompras(): Promise<ICompras[]> {
    return await knex('Compras').orderBy('created', 'desc').select('*');
  }

  async getCompraById(id_compra: number): Promise<ICompras> {
    return await knex('Compras').where({ id_compra }).first();
  }

  async createCompra(compra: ICreateCompra): Promise<ICompras> {
     await knex('Compras').insert({...compra});

    return await knex('Compras').orderBy('id_compra', 'desc').first();
  }

  async updateCompra(id_compra: number, compra: ICompras): Promise<ICompras> {
      const response = await knex('Compras').where({ id_compra }).update(compra);
    return await knex('Compras').where({ id_compra: response }).first();
  }

  async deleteCompra(id_compra: number): Promise<number> {
    return await knex('Compras').where({ id_compra }).del();
  }
  async getAnalise(): Promise<AnaliseStats> {
    const [Cancelada, Concluida,Pendente ] = await knex.raw(`
SELECT 'Pendente' as status, SUM(total) as total, COUNT(*) as quantidade
FROM Compras
WHERE status = '${Status.PENDING}'
UNION ALL
SELECT 'Concluída' as status, SUM(total) as total, COUNT(*) as quantidade
FROM Compras
WHERE status = '${Status.COMPLETED}'
UNION ALL
SELECT 'Cancelada' as status, SUM(total) as total, COUNT(*) as quantidade
FROM Compras
WHERE status = '${Status.CANCELED}'
ORDER BY status
      `);
    return {Pendente, Concluida, Cancelada};
  }
}

export default new CompraRepository();


