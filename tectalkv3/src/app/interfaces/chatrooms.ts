export interface IChatrooms {
    Chatroom_id?: string;
    ChatroomName?: string;
    Creator_id?: string;
    Account_id?: string;
}

export interface IChatroomMembers {
    Room_id?: string;
    Account_id?: string;
    Username?: string;
    Password?: string;
    Email?: string;
    fullname?: string;
    Online_Status?: string;
    picture?: string;
    firstname?: string;
    lastname?: string;
    location?: string;
    member?: boolean;
}