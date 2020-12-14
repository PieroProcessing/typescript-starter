export interface Account {
    accountId: string;
    iban: string;
    abiCode: string;
    cabCode: string;
    countryCode: string;
    internationalCin: string;
    nationalCin: string;
    account: string;
    alias: string;
    productName: string;
    holderName: string;
    activatedDate: string;
    currency: 'EUR' | 'USD';
}