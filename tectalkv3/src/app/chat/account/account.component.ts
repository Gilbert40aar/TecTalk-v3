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
    
    if(!this.account.firstname && !this.account.lastname) {
      this.fullName = this.account.username;
    } else {
      this.fullName = this.account.firstname + " " + this.account.lastname;
    }

    this.email = this.account.email;
    this.time = window.localStorage.getItem('loginTime');
    this.location = 'Ballerup, Denmark';
    this.isOnline = this.account.online_status === "1" ? true : false;

  }

  updateAccount() {
    this.router.navigate(['/chat/update-account']);
  }

  aboutBoxToggle() {
    let aboutBox = document.getElementById("about-box");
    let about = document.getElementById("about");
    let filesBox = document.getElementById("files-box");
    let files = document.getElementById("files");
    if(about.className === 'dropdown') {
      about.className += ' active';
      aboutBox.className += ' show';
      files.className = 'dropdown';
      filesBox.className = 'dropdown-box';
    } else {
      about.className = 'dropdown';
      aboutBox.className = 'dropdown-box';
      
    }
  }

  filesBoxToggle() {
    let filesBox = document.getElementById("files-box");
    let files = document.getElementById("files");
    let aboutBox = document.getElementById("about-box");
    let about = document.getElementById("about");
    if(files.className === 'dropdown') {
      files.className += ' active';
      filesBox.className += ' show';
      about.className = 'dropdown';
      aboutBox.className = 'dropdown-box';
    } else {
      files.className = 'dropdown';
      filesBox.className = 'dropdown-box';
      
    }
  }
}
