import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {DataContainer} from 'src/app/interfaces/dataContainer';
import {IAccount} from 'src/app/interfaces/account';

@Component({
  selector: 'app-onlinelist',
  templateUrl: './onlinelist.component.html',
  styleUrls: ['./onlinelist.component.css']
})
export class OnlinelistComponent implements OnInit {

  interval: any;
  accounts: IAccount[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.interval = setInterval(this.getAccounts.bind(this), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  async getAccounts() {
    let data: DataContainer = await this.api.showAllAccounts();
    //console.log(data.Accounts);

    this.accounts = data.Accounts;
  }
}
