import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataContainer } from '../interfaces/dataContainer';
import { IAccount } from '../interfaces/account';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  accounts: IAccount[] = [];

  constructor(private api: ApiService) { 
    
  }

  ngOnInit(): void {
    this.loadAccounts();
  }

  async loadAccounts() {
    let data: DataContainer = await this.api.showAllAccounts();
    console.log(data.Accounts);

    this.accounts = data.Accounts;
  }

  
  
}
