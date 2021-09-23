export interface IAccount {
    account_id?: number;
    username: string;
    password?: string;
    email: string;
    online_status? :string;
    picture?: string;
    fullname?: string;
}