import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';
import { IMessage } from 'src/app/interfaces/message';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  chat: IMessage[] = [];
  message: string;

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
      account_id: window.localStorage.getItem('account_id'),
      datetime: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() +" " + this.pad(d.getHours()) + ":" + this.pad(d.getMinutes()),
      Message: form.value.message,
    }
    
    //console.log(data);
    if(this.api.sendMessage(data)) {
      //form.value.message = "";
      this.message = ""

    }
  }

}
