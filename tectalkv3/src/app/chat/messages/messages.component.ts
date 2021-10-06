import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IMessage } from 'src/app/interfaces/message';
import { ChatMessageContainer } from 'src/app/interfaces/dataContainer';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  interval: any;
  chat: IMessage[] = [];
  account_id: string;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.interval = setInterval(this.getMessages.bind(this), 1000);
    //this.getMessages();
    this.account_id = localStorage.getItem('account_id');
    //console.log(this.account_id);
    
  }

  async getMessages() {
    let data: ChatMessageContainer = await this.api.getChatMessages(window.localStorage.getItem('Chatroom_id'));
    this.chat = data.Messages;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
