import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormControl, FormGroup, NgForm, FormsModule, Validators } from '@angular/forms';
import { ILogin, ImailCheck, IpassCheck } from '../interfaces/login';
import { Router } from '@angular/router';
import { IGrantedLogin } from '../interfaces/grantedLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mailCheck: ImailCheck;
  passCheck: IpassCheck;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  async emailValid(email: string): Promise<boolean> {
    let result: ImailCheck = await this.api.checkEmail(email);
    return result.exists;
  }

  async passwordValid(password: string): Promise<boolean> {
    let result: IpassCheck = await this.api.checkPassword(password);
    return result.exists;
  }

  successfullLogin(): void {
    this.router.navigate(['/chat/userlist']);
  }

  failLogin(): void {

  }

  async saveLoginState(email: string, password: string): Promise<boolean> {
    let data : ILogin = { email, password };
    let result: IGrantedLogin = await this.api.accountLogin(data);
    
    if (!result) return false;

    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let currentTime = hour + ":" + min;

    window.localStorage.setItem('account_id', result.account_id);
    window.localStorage.setItem('loggedIn', '1');
    window.localStorage.setItem('loginTime', currentTime.toString());
    window.localStorage.setItem('Chatroom_id', '1');

    return true;
  }

  async loginHandler(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;

    let emailValid = await this.emailValid(email);
    let passwordValid = await this.passwordValid(password);

    if (!emailValid || !passwordValid) {
      this.failLogin();
      return;
    }

    let savedState = this.saveLoginState(email, password);

    if (!savedState) {
      this.failLogin();
      return;
    }

    this.successfullLogin();
  }

}
