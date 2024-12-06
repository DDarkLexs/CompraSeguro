interface AnalisePorStatus {
    quantidade: number;
    status: string;
    total: number | null;
  }
  
  interface AnaliseStats {
    Cancelada: AnalisePorStatus;
    Concluida: AnalisePorStatus;
    Pendente: AnalisePorStatus;
  }
  