import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/interfaces/account';
import { DataContainerSingle } from 'src/app/interfaces/dataContainer';
import { ApiService } from 'src/app/services/api.service';
import { NgForm, NgModel } from '@angular/forms';
import { FileserviceService } from 'src/app/services/fileservice.service';


@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  account: IAccount;

  public fileName;
  selectedFile: File;

  constructor(private api: ApiService, private fileservice: FileserviceService) { }

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
    this.fileName = filename;

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
      this.onUploadFile();
    }
    
  }

  onFileUpload(event) {
    this.selectedFile = event.target.files[0]; 
  }

  onUploadFile() {
    this.fileservice.OnUploadFile(this.selectedFile);
  }

  personalBoxToggle() {
    let personalBox = document.getElementById("personal-box");
    let personal = document.getElementById("personal");
    let privacyBox = document.getElementById("privacy-box");
    let privacy = document.getElementById("privacy");
    let helpBox = document.getElementById("help-box");
    let help = document.getElementById("help");
        
    if(personal.className === 'dropdown') {
      personal.className += ' active';
      personalBox.className += ' show';
      privacy.className = 'dropdown';
      privacyBox.className = 'dropdown-box';
      help.className = 'dropdown';
      helpBox.className = 'dropdown-box';
    } else {
      personal.className = 'dropdown';
      personalBox.className = 'dropdown-box';
      
    }
  }

  privacyBoxToggle() {
    let personalBox = document.getElementById("personal-box");
    let personal = document.getElementById("personal");
    let privacyBox = document.getElementById("privacy-box");
    let privacy = document.getElementById("privacy");
    let helpBox = document.getElementById("help-box");
    let help = document.getElementById("help");
        
    if(privacy.className === 'dropdown') {
      privacy.className += ' active';
      privacyBox.className += ' show';
      personal.className = 'dropdown';
      personalBox.className = 'dropdown-box';
      help.className = 'dropdown';
      helpBox.className = 'dropdown-box';
    } else {
      privacy.className = 'dropdown';
      privacyBox.className = 'dropdown-box';
      
    }
  }

  helpBoxToggle() {
    let personalBox = document.getElementById("personal-box");
    let personal = document.getElementById("personal");
    let privacyBox = document.getElementById("privacy-box");
    let privacy = document.getElementById("privacy");
    let helpBox = document.getElementById("help-box");
    let help = document.getElementById("help");
        
    if(help.className === 'dropdown') {
      help.className += ' active';
      helpBox.className += ' show';
      privacy.className = 'dropdown';
      privacyBox.className = 'dropdown-box';
      personal.className = 'dropdown';
      personalBox.className = 'dropdown-box';
    } else {
      help.className = 'dropdown';
      helpBox.className = 'dropdown-box';
      
    }
  }

}
