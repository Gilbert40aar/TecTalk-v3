import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/interfaces/account';
import { DataContainer } from 'src/app/interfaces/dataContainer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chatroom-members',
  templateUrl: './chatroom-members.component.html',
  styleUrls: ['./chatroom-members.component.css']
})
export class ChatroomMembersComponent implements OnInit {

  public ChatroomName = window.localStorage.getItem('ChatroomName');
  accounts: IAccount[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  showForm() {
    let form = document.getElementById("add-account");
    if(form.className === 'account-form') {
      form.className += ' show';
    } else {
      form.className = 'account-form';
    }
  }

  async getAccounts() {
    let data: DataContainer = await this.api.showAllAccounts();
    this.accounts = data.Accounts;
    console.log(this.accounts);
  }

  assignAccount(form: NgForm) {
    let assign_id = form.value.accounts;
    console.log('Assigned ID: ' + assign_id);
  }

}
