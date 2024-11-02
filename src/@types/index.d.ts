interface ICompras {
    id_compra: number;
    nome: string;
    data: Date | string;
    descricao: string | null;
    status: Status.PENDING | Status.COMPLETED | Status.CANCELED;
    total: number;
    created: Date | string;
    updated: Date | string;
}
interface IProdutos {
    id_produto: number;
    nome: string;
    preco: number;
    qtd: number;
    comprado: boolean;
    total: number;
    created: Date | string;
    updated: Date | string;
    id_compra: number;
}

interface Notificacao {
    id: number;
    titulo: string;
    mensagem: string;
    lida: boolean;
    created: Date;
    updated: Date;
}




interface ICreateCompra implements Pick<ICompras, "nome" | "descricao"> {
    nome: string;
    descricao: string | null;
} 
