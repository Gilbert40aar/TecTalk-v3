import { IAccount } from './account';

export interface DataContainer {
    Accounts: IAccount[];
}

export interface DataContainerSingle {
    Account: IAccount[];
}