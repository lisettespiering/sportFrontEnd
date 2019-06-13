import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account';
import { Account } from '../domain/account'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-accountlogin',
  templateUrl: './accountlogin.component.html',
  styleUrls: ['./accountlogin.component.css']
})
export class AccountloginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router) { }

    email : String;
    wachtwoord : String;
    account : Account;

    ngOnInit() {
      this.route.params.subscribe(
        data =>
          this.accountService.retrieveById(data.id).subscribe(
            (account: Account) => this.account = account,
            (fout: HttpErrorResponse) =>
              alert("Er is een fout opgetreden: " +
                fout.error.error.status + " " + fout.error.error + "\n" +
                "\nMessage:\n" + fout.error.message
              )
          )
      )    
    }

}
