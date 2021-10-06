import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IAccount } from 'src/app/interfaces/account';
import { IChatrooms } from 'src/app/interfaces/chatrooms';
import { ChatroomContainer } from 'src/app/interfaces/dataContainer';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chatrooms',
  templateUrl: './chatrooms.component.html',
  styleUrls: ['./chatrooms.component.css']
})
export class ChatroomsComponent implements OnInit {

  interval: any;
  accounts: IAccount[] = [];
  chatrooms: IChatrooms[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getChatrooms();
  }

  newChatroom() {
    
    this.router.navigate(['/chat/create-chatroom']);
  }

  async getChatrooms() {
    let data: ChatroomContainer = await this.api.getchatrooms(window.localStorage.getItem('account_id'));
    this.chatrooms = data.Chatrooms;
    console.log(this.chatrooms);
    
  }

  showChatroom(id, title) {
    window.localStorage.setItem('Chatroom_id', id);
    window.localStorage.setItem('ChatroomName', title);
    this.router.navigate(['/chat/Chatroom/']);
  }

}
