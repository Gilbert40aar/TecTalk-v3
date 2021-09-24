import { Component, OnInit } from '@angular/core';
import {IAccount} from 'src/app/interfaces/account';
import {DataContainerSingle} from 'src/app/interfaces/dataContainer';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: IAccount;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadSingleAccount();
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

  updateAccount() {
    this.router.navigate(['/chat/update-account']);
  }
}
