import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/account';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account';
import { HttpErrorResponse } from '@angular/common/http';
import { SportService } from '../service/sport';
import { Sport } from '../domain/sport';

@Component({
  selector: 'app-accountcreate',
  templateUrl: './accountcreate.component.html',
  styleUrls: ['./accountcreate.component.css']
})
export class AccountcreateComponent implements OnInit {

  account : Account = new Account();
  
  wachtwoordcheck : String;
  wwerror : String;
  sporten : Sport[];

  constructor(private accountService : AccountService,
    private sportService : SportService,
    private router : Router) { }

  ngOnInit() {
    this.sportService.retrieveAll().subscribe(sport  => {
      this.sporten = sport;
  })}

  versturen() {

    if(this.wachtwoordcheck == this.account.wachtwoord) {
    this.accountService.create(this.account).subscribe(
        account  => { console.log(account) },
        error => console.log(error.message),
        () => this.router.navigate(['account'] )
               )
  }
    else {
      this.wwerror = "De wachtwoorden komen niet overeen."
    }
  }
}

