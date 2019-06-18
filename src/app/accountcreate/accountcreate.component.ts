import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/account';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/accountService';
import { Sport } from '../domain/sport';
import { SportService } from '../service/sportService';

//import * as shajs from 'sha.js'

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
      //this.account.wachtwoord = shajs('sha256').update(this.account.wachtwoord).digest('hex');
    this.accountService.create(this.account).subscribe(
        account  => { console.log(account) },
        error =>  {//this.wwerror = error.message,//console.log(error.message),
          if (error.message = "Http failure response for http://localhost:8080//account/createAccount: 409 OK") {
            this.wwerror = "Dit e-mail adres bestaat al in onze database."
        }//} else {
          //  this.router.navigate(['account'] )
          //}
        },
        () => this.router.navigate(['account'] )

    )
  }
    else {
      this.wwerror = "De wachtwoorden komen niet overeen."
    }
  }
}

