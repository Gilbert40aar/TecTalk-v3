export interface ILogin {
    account_id?: number;
    email: string;
    password?: string;
    online_status?: number;
}

export interface ImailCheck {
    exists: boolean;
}

export interface IpassCheck {
    exists: boolean;
}