import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataContainer, DataContainerSingle } from '../interfaces/dataContainer';
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
  account: IAccount;
  chat: IMessage[] = [];
  message: string;
  //@ViewChild('message') message: HTMLInputElement; 

  constructor(private api: ApiService) { 
    
  }

  ngOnInit(): void {
    this.loadAccounts();
    this.loadSingleAccount();
  }

  async loadAccounts() {
    let data: DataContainer = await this.api.showAllAccounts();
    //console.log(data.Accounts);

    this.accounts = data.Accounts;
  }

  public fullName;
  public email;
  public time;
  public location;
  public isOnline: boolean = false;


  async loadSingleAccount() {
    let user: DataContainerSingle = await this.api.showSingleAccount();
    this.account = user.Account[0];
    if(!this.account.fullname) {
      this.fullName = this.account.username;
    } else {
      this.fullName = this.account.fullname;
    }

    this.email = this.account.email;
    this.time = window.localStorage.getItem('loginTime');
    this.location = 'Ballerup, Denmark';
    this.isOnline = this.account.online_status === "1" ? true : false;

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
