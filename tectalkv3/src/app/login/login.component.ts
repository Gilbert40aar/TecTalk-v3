import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormControl, FormGroup, NgForm, FormsModule, Validators } from '@angular/forms';
import { ILogin } from '../interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  async loginHandler(form: NgForm) {
    if(form.value.username === "") {
      console.log("Username may not be empty");
    } else {
      if(form.value.password === "") {
        console.log("Password may not be empty");
      } else {
        let data : ILogin = {
          username: form.value.username,
          password: form.value.password
        }

        let result = await this.api.accountLogin(data);

        if(!result) {
          console.log("An error occour!!!");
        } else {
          let currentTime = Math.floor(Date.now()/1000);
          window.localStorage.setItem('account_id', result.account_id);
          window.localStorage.setItem('loggedIn', '1');
          this.router.navigate(['/chat']);
        }
      }
    }
  }

}
