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

  public emailMessage = '';
  public pswMessage1 = '';
  public pswMessage2 = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    
  }

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

  checkPassword2(form: NgForm) {
    if(form.value.pass1 != form.value.pass2) {
      this.pswMessage2 = "Passwords do not match";
    } else {
      this.pswMessage2 = "Passwords is a match";
    }
  }

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
          if(!this.api.saveData(data)) {

          } else {
            this.router.navigate(['/login']);
          }
          console.log(data);
        }
      }
    }
  }

}
