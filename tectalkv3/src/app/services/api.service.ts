import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import {IAccount} from 'src/app/interfaces/account';
import {ILogin, ImailCheck, IpassCheck} from 'src/app/interfaces/login';
import { IGrantedLogin } from 'src/app/interfaces/grantedLogin';
import { DataContainer, DataContainerSingle, ChatMessageContainer } from 'src/app/interfaces/dataContainer';
import { IMessage } from 'src/app/interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://192.168.4.126/tectalk/api/";

  saveData(data: IAccount): Promise<Object> {
    const body = JSON.stringify(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    return this.http.post(this.baseUrl + 'account/insert', body, {headers: headers}).toPromise();
  }

  accountLogin(data: ILogin): Promise<IGrantedLogin> {
    let email = data.email;
    let password = data.password;

    let response  = this.http.get<IGrantedLogin>(this.baseUrl + "login/login/" + email + "/" + password).toPromise();

    //console.log(window);
    return response;
  }

  accountLogout() {
    let account_id = window.localStorage.getItem('account_id');
    //console.log(account_id);
    let logout = this.http.get(this.baseUrl + 'login/logout/' + account_id).toPromise();
    if(!logout) {
      return false;
    } else {
      window.localStorage.removeItem('loggedIn');
      window.localStorage.removeItem('account_id');
      window.localStorage.removeItem('loginTime');
      return true;
    }
  }

  async showAllAccounts(): Promise<DataContainer> {
    return this.http.get<DataContainer>(this.baseUrl + 'account/select').toPromise();
  }

  sendMessage(data: IMessage): Promise<Object> {
    const body = JSON.stringify(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    return this.http.post(this.baseUrl + 'messages/insert', body, {headers: headers}).toPromise();
  }

  async showSingleAccount(): Promise<DataContainerSingle> {
    return this.http.get<DataContainerSingle>(this.baseUrl + 'account/single/' + window.localStorage.getItem('account_id')).toPromise();
  }

  async checkEmail(email): Promise<ImailCheck> {
    return this.http.get<ImailCheck>(this.baseUrl + 'login/checkEmail/' + email).toPromise();
  }

  async checkPassword(password): Promise<IpassCheck> {
    return this.http.get<IpassCheck>(this.baseUrl + 'login/checkPassword/' + password).toPromise();
  }

  async getChatMessages(): Promise<ChatMessageContainer> {
    return await this.http.get<ChatMessageContainer>(this.baseUrl + 'messages/select').toPromise();
  }

  updateAccount(data: IAccount): Promise<Object> {
    const body = JSON.stringify(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    return this.http.post<DataContainerSingle>(this.baseUrl + "account/update", body, {headers: headers}).toPromise();
  }
}
