import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import {IAccount} from 'src/app/interfaces/account';

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
}
