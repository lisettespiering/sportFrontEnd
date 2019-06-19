import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private loginservice : LoginService,
              private router : Router) { }


  ngOnInit() {
      if(this.loginservice.activeaccount != null) {
        this.router.navigate(['account/youraccount']);
      }
  }

}
