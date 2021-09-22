import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/interfaces/account';
import { FormBuilder, FormControl, FormGroup, NgForm, FormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Here we set some variables for some messages to be shown while
  // you create your account. Along the way under your creation of the account
  // All fields will be validated to see if the for fill all criterias
  public emailMessage = '';
  public pswMessage1 = '';
  public pswMessage2 = '';

  // In the constructor we make some private variables
  // one for the ApiService and one for the router
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    
  }

  // Here we have made a function which check if the password is strong enough
  // But we also check if the password contains at least 1 big letter and 1 small letter and one number
  // the password has to be at least 10 characters long.
  checkPassword1(form: NgForm) {
    let passwordCheck = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,}$');
    let test = passwordCheck.test(form.value.pass1);
    if(!test) {
      this.pswMessage1 = "Password isn't strong enough";
      //console.log('Password: ' + form.value.pass1);
    } else {
      this.pswMessage1 = "Password is strong enough";
      //console.log('Password: ' + form.value.pass1);
    }
  }

  // Here we make a match between the passwords which the user has entered in the form
  // If they match a message will be shown, that says that: passwords is a match
  // If they don't match a message will be shown that says that: passwords do not match
  checkPassword2(form: NgForm) {
    if(form.value.pass1 != form.value.pass2) {
      this.pswMessage2 = "Passwords do not match";
    } else {
      this.pswMessage2 = "Passwords is a match";
    }
  }

  // Here we make a function which check out if the email is a valid email
  // for the email to be valid it has to end with one of the following domains: elev.tec.dk or tec.dk
  // If the mail is not valid there will be written a message to the user which says: Email is not valid
  // If the mail is valis the message to the user will say: Email is valid
  checkEmail(form: any) {
    //const msg = document.getElementById("message");
    let mailCheck = new RegExp('^[a-zA-Z0-9+.-]+@(elev.tec.dk|tec.dk)$');
    let test = mailCheck.test(form.value.email);
    //console.log(msg);
    if(!test) {
        this.emailMessage = "Email is not valid";
        //console.log(form.value.email + " : " + test);
    } else {
        this.emailMessage = "Email is valid";
        //console.log(form.value.email + " : " + test); 
    }
  }

  // Here we have the function which contains all code for the submit button click
  // Here we make all the same validations again as we have been doing all along
  // This is just to be sure that we don't have anything we have missed
  submitHandler(form: NgForm) {
    if(form.value.pass1 != form.value.pass2) {
      
    } else {
      let passwordCheck = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,}$');
      let passtest = passwordCheck.test(form.value.pass1);
      if(!passtest) {

      } else {
        let mailCheck = new RegExp('^[a-zA-Z0-9+.-]+@(elev.tec.dk|tec.dk)$');
        let mailtest = mailCheck.test(form.value.email);
        if(!mailtest) {

        } else {
          let data: IAccount = {
            email: form.value.email,
            password: form.value.pass1,
            username: form.value.username
          }
          console.log(data);
          
          if(!this.api.saveData(data)) {

          } else {
            this.router.navigate(['/login']);
          }
          //console.log(data);
        }
      }
    }
  }

}
