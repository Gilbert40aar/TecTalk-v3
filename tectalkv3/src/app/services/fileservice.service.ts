import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService {
  private fileList: string[] = new Array<string>();
  private fileList$: Subject<string[]> = new Subject<string[]>();

  constructor(private http: HttpClient) { }

  OnUploadFile(fileName) {
    const body = JSON.stringify(fileName);
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    this.http.post(`http://192.168.4.126/tectalk/api/account/uploadPicture/${fileName}`, body, {headers});
  }
}

