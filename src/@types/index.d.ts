interface compras {
    id_compra: number;
    nome: string;
    data: Date | string;
    total: number;
    created: Date | string;
    updated: Date | string;
}
interface produtos {
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