import { IAccount } from './account';
import { IGrantedLogin } from './grantedLogin';
import { IMessage } from './message';

export interface DataContainer {
    Accounts: IAccount[];
}

export interface DataContainerSingle {
    Account: IAccount[];
}

export interface ChatMessageContainer {
    Messages: IMessage[];
}