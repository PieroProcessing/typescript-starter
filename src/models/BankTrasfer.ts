export interface Account {
    accountCode: string;
    bicCode?: string;
}

export interface Address {
    address?: any;
    city?: any;
    countryCode?: any;
}

export interface Creditor {
    name: string;
    account: Account;
    address?: Address;
}

export interface NaturalPersonBeneficiary {
    fiscalCode1: string;
    fiscalCode2?: any;
    fiscalCode3?: any;
    fiscalCode4?: any;
    fiscalCode5?: any;
}

export interface LegalPersonBeneficiary {
    fiscalCode?: any;
    legalRepresentativeFiscalCode?: any;
}

export interface TaxRelief {
    taxReliefId: string;
    isCondoUpgrade: boolean;
    creditorFiscalCode: string;
    beneficiaryType: string;
    naturalPersonBeneficiary: NaturalPersonBeneficiary;
    legalPersonBeneficiary: LegalPersonBeneficiary;
}

export interface BankTrasfer {
    creditor: Creditor;
    executionDate?: string;
    uri?: string;
    description: string;
    amount: number;
    currency: string;
    isUrgent?: boolean;
    isInstant?: boolean;
    feeType?: string;
    feeAccountId?: string;
    taxRelief?: TaxRelief;
}