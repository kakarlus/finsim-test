export interface Holding {
  Id: number;
  InvestmentCode: string;
  Price: number;
  Units: number;
  PurchaseDateUtc: string;
}

export interface Account {
  Id: number;
  AccountCode: string;
  AccountName: string;
  AvailableCash: number;
  LocalCurrency: string;
  Holdings: Array<Holding>;
}

export interface Investor {
  Id: number;
  FullName: string;
  PhoneNumber: string;
  Accounts: Array<Account>;
}
