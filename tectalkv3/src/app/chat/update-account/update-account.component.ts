import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/interfaces/account';
import { DataContainerSingle } from 'src/app/interfaces/dataContainer';
import { ApiService } from 'src/app/services/api.service';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  account: IAccount;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSingleAccount();
  }

  public firstname;
  public lastname;
  public username;
  public location;
  public fullname;
  public account_id;

  async getSingleAccount() {
    let user: DataContainerSingle = await this.api.showSingleAccount();
    this.account = user.Account[0];

    console.log(this.account);
    

    if(this.account.firstname === undefined && this.account.lastname === undefined) {
      this.fullname = this.account.username;
    } else {
      this.fullname = this.account.firstname + " " + this.account.lastname;
    }
    
    this.firstname = this.account.firstname;
    this.lastname = this.account.lastname;
    this.username = this.account.username;
    this.location = this.account.location;
    this.account_id = window.localStorage.getItem('account_id');
  }

  updateAccount(form: NgForm) {
    
    let picture: string = form.value.picture;
    let pathRegex = /^(.*\\).*$/;
    let regex = pathRegex.exec(picture);
    let filename = picture.replace(regex[1], '');
    
    let data: IAccount = {
      account_id: this.account_id,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      username: form.value.username,
      location: form.value.location,
      picture: filename
    }

    console.log(data);
    if(!this.api.updateAccount(data)) {
      console.log('Something went wrong...');
    } else {
      console.log('Account is updated...');
    }
    
  }

}
