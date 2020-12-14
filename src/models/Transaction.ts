
export interface Type {
    enumeration: string;
    value: string;
}

export interface Transaction {
    transactionId: string;
    operationId: string;
    accountingDate: string;
    valueDate: string;
    type: Type;
    amount: number;
    currency: string;
    description: string;
}