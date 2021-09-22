import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import {IAccount} from 'src/app/interfaces/account';
import {ILogin} from 'src/app/interfaces/login';
import { IGrantedLogin } from '../interfaces/grantedLogin';
import { DataContainer } from '../interfaces/dataContainer';

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
    let username = data.username;
    let password = data.password;

    let response  = this.http.get<IGrantedLogin>(this.baseUrl + "login/login/" + username + "/" + password).toPromise();

    //console.log(window);
    return response;
  }

  accountLogout() {
    //let account_id = data.account_id
    let logout = this.baseUrl + 'login/logout/' + window.localStorage.getItem('account_id');
    if(!this.http.get(this.baseUrl + 'login/logout/' + window.localStorage.getItem('account_id'))) {
      return false;
    } else {
      window.localStorage.removeItem('loggedIn');
      window.localStorage.removeItem('account_id');
      return true;
    }
  }

  async showAllAccounts(): Promise<DataContainer> {
    return this.http.get<DataContainer>(this.baseUrl + 'account/select').toPromise();
  }
}
