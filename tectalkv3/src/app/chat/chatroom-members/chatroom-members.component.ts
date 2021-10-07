import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/interfaces/account';
import { DataContainer, ChatroomMembersContainer } from 'src/app/interfaces/dataContainer';
import { NgForm } from '@angular/forms';
import { IChatroomMembers } from 'src/app/interfaces/chatrooms';

@Component({
  selector: 'app-chatroom-members',
  templateUrl: './chatroom-members.component.html',
  styleUrls: ['./chatroom-members.component.css']
})
export class ChatroomMembersComponent implements OnInit {

  public ChatroomName = window.localStorage.getItem('ChatroomName');
  accounts: IAccount[] = [];
  members: IChatroomMembers[] =  [];
  public selectedID;
  interval: any
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAccounts();
    this.interval = setInterval(this.showMembers.bind(this), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
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
  }

  assignAccount(form: NgForm) {
    let assign_id = this.selectedID;
    let data: IChatroomMembers = {
      Room_id: window.localStorage.getItem('Chatroom_id'),
      Account_id: this.selectedID
    }
    this.api.addAccountToRoom(data);
    this.router.navigate(['/chat/Chatroom']);
  }

  selectChangeHandler(event: any) {
    this.selectedID = event.target.value;
  }

  async showMembers() {
    let data: ChatroomMembersContainer = await this.api.showMembers(window.localStorage.getItem('Chatroom_id'));
    this.members = data.Members;
  }

}
