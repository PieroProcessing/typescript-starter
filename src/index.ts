import { baseUrl, authSchema, apiKey } from './configuration.stage.json';
import { Account } from './models/Account';
import axios from 'axios';
import { BankTrasfer } from './models/BankTrasfer';
import { Transaction } from './models/Transaction';
const config = {
    headers: {
        "Content-Type": "application/json",
        "auth-schema": authSchema,
        "api-key": apiKey,
        "X-Time-Zone": 'Europe/Rome'
    },
}

export const getCashAccount = async (accountId: string): Promise<Account | undefined> => {
    try {
        const url = `${baseUrl}/api/gbs/banking/v4.0/accounts/${accountId}`;
        const { data } = await axios.get(url, config);
        return data.payload;
    } catch (error) {
        return;
    }
}

export const moneyTransfers = async (accountId: string, bankTransfert: BankTrasfer | any): Promise<any> => {
    try {
        const url = `${baseUrl}/api/gbs/banking/v4.0/accounts/${accountId}/payments/money-transfers`;
        const response = await axios.post(url, bankTransfert, config);
        return response;
    } catch (error) {
        return error.response.data;
    }
}

export const getTransactions = async (accountId: string, fromAccountingDate: string, toAccountingDate: string): Promise<Transaction[]> => {
    try {
        let url = `${baseUrl}/api/gbs/banking/v4.0/accounts/${accountId}/transactions`
        const { data } = await axios.get(url, { ...config, params: { fromAccountingDate, toAccountingDate } });
        return data.payload.list;
    } catch (error) {
        return error;
    }
}