import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';
import { IMessage } from 'src/app/interfaces/message';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  chat: IMessage[] = [];
  Message: string;
  public ChatroomName = 'Chatroom';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  pad(value) {
    if(value < 10) {
      return '0' + value;
    } else {
      return value;
    }
  }

  sendMessage(form: NgForm) {
    let d = new Date();
    let data: IMessage = {
      Account_id: window.localStorage.getItem('account_id'),
      Datetime: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() +" " + this.pad(d.getHours()) + ":" + this.pad(d.getMinutes()) + ":" + this.pad(d.getSeconds()),
      Message: form.value.Message,
      Chatroom_id: window.localStorage.getItem('Chatroom_id')
    }
    
    //console.log(data);
    if(this.api.sendMessage(data)) {
      //form.value.message = "";
      this.Message = "";

    }
  }

  toggled: boolean = false;
  handleSelection(event) {
    this.Message += event.char;
  }

  MessageChange(event) {
    this.Message = event;
  }

}
