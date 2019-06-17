import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account';
import { Account } from '../domain/account'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-accountlogin',
  templateUrl: './accountlogin.component.html',
  styleUrls: ['./accountlogin.component.css']
})
export class AccountloginComponent implements OnInit {

  account : Account = new Account();

  constructor(private route: ActivatedRoute,
    private loginservice: LoginService,
    private router: Router) { }

    ngOnInit() {
    }

  versturen() {
    this.loginservice.loginUser(this.account.email, this.account.wachtwoord).subscribe(
      account  => { 
        this.loginservice.activeaccount = account; 
        console.log(account);
       },
      error => console.log(error.message),
      () => this.router.navigate(['home'] )
    )
  }

}
