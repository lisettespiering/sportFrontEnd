import { Component, OnInit } from '@angular/core';
import { LocatieService } from '../service/locatieService';
import { LoginService } from '../service/loginService';
import { Router } from '@angular/router';
import { AccountService } from '../service/accountService';
import { Account } from '../domain/account'
import { SportService } from '../service/sportService';
import { Sport } from '../domain/sport';

@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent implements OnInit {

  account : Account = new Account;
  sporten : Sport[];
  wwerror : string;
  nieuwWW : string = "";
  wachtwoordcheck : String = "";
  oldemail : string; //this is actually the new email
  constructor(private loginService : LoginService,
              private router : Router,
              private accountService : AccountService,
              private sportService : SportService) { }

  ngOnInit() {
    if (this.loginService.activeaccount == null) {
      this.router.navigate(['account'] )
    }

    this.sportService.retrieveAll().subscribe(sport  => {
      this.sporten = sport;
    this.accountService.retrieveById(this.loginService.activeaccount.id).subscribe(account => {
      console.log(this.account = account)
      this.account.wachtwoord = ""
      this.oldemail = this.account.email})
  })}

  versturen(){
    
    console.log(this.account)
    this.accountService.checkWW(this.account).subscribe(account => {
      console.log(account)
      console.log(this.nieuwWW)
      console.log(this.wachtwoordcheck)
      if (this.nieuwWW == this.wachtwoordcheck) {
        if (this.nieuwWW != "") {
          this.account.wachtwoord = this.nieuwWW;
        }
        this.account.email = this.oldemail
        this.accountService.update(this.account).subscribe(
          account => {console.log(this.account = account)
          this.loginService.activeaccount = this.account;
          },
          error => console.log(error.message),
          () => this.router.navigate(['home'] ) 
        )
      } else {
        this.wwerror = "De wachtwoorden komen niet overeen."
      }
    },
     error => {
       console.log(error.message)
      this.wwerror = "U heeft niet het juiste wachtwoord ingevuld."}
     
    
     )

  }

}
