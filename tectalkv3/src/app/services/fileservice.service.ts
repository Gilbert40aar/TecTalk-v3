import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService {
  private fileList: string[] = new Array<string>();
  private fileList$: Subject<string[]> = new Subject<string[]>();

  constructor(private http: HttpClient) { }

  OnUploadFile(fileName) {
    this.http.get(`http://192.168.4.126/tectalk/api/account/uploadPicture/${fileName}`);
  }
}

