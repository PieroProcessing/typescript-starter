import { expect } from "chai";
import { accountId } from '../configuration.stage.json';
import { getCashAccount, getTransactions, moneyTransfers } from "..";
import { Account } from "../models/Account";
import { user1, user2 } from "./fakeBankTrasfers.json";
import { Transaction } from "../models/Transaction";

describe('getCashAccount', () => {
  it('getCashAccount', async () => {
    const { accountId: id } = await getCashAccount(accountId) as Account;
    expect(accountId).equal(id);
  });
  it('getTransactions', async () => {
    const transactions = await getTransactions(accountId, '2020-04-01', '2020-12-01') as Transaction[];
    expect(transactions).to.have.property('length');
  });
  it('bankTrasfer with user1', async () => {
    const { status, errors } = await moneyTransfers(accountId, user1);
    expect(status).equal('KO');
    const [{ code, body }] = errors;
    expect(code).equal("API000");
    expect(body).equal(`Errore tecnico  La condizione BP049 non e' prevista per il conto id ${accountId}`);
  });

  it('bankTrasfer with user2', async () => {
    const { status, errors } = await moneyTransfers(accountId, user2);
    expect(status).equal('KO');
    const [{ code, body }] = errors;
    expect(code).equal("API000");
    expect(body).equal(`Errore tecnico  La condizione BP049 non e' prevista per il conto id ${accountId}`);
  });
});