import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    let logout = this.api.accountLogout();

    if(logout) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/chat']);
    }
  }

}
