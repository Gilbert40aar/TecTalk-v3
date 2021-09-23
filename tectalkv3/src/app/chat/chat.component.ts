import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataContainer } from '../interfaces/dataContainer';
import { IAccount } from '../interfaces/account';
import { NgForm } from '@angular/forms';
import { IMessage } from '../interfaces/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  accounts: IAccount[] = [];
  chat: IMessage[] = [];
  message: string;
  //@ViewChild('message') message: HTMLInputElement; 

  constructor(private api: ApiService) { 
    
  }

  ngOnInit(): void {
    this.loadAccounts();
  }

  async loadAccounts() {
    let data: DataContainer = await this.api.showAllAccounts();
    //console.log(data.Accounts);

    this.accounts = data.Accounts;
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
      datetime: this.pad(d.getHours()) + ":" + this.pad(d.getMinutes()),
      message: form.value.message,
      todaydate: d.getFullYear() + "." + d.getMonth() + "." + d.getDate()
    }
    
    //console.log(data);
    if(this.api.sendMessage(data)) {
      //form.value.message = "";
      this.message = ""

    }

    
  }

  
  
}
