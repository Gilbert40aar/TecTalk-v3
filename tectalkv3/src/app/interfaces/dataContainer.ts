import { IAccount } from './account';
import { IGrantedLogin } from './grantedLogin';
import { IMessage } from './message';
import { IChatrooms, IChatroomMembers } from './chatrooms';

export interface DataContainer {
    Accounts: IAccount[];
}

export interface DataContainerSingle {
    Account: IAccount[];
}

export interface ChatMessageContainer {
    Messages: IMessage[];
}

export interface ChatroomContainer {
    Chatrooms: IChatrooms[];
}

export interface ChatroomMembersContainer {
    Members: IChatroomMembers[];
}