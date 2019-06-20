import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/loginService';
import { Router } from '@angular/router';

import { Review } from '../domain/review';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountService } from '../service/accountService';
import { ReviewService } from '../service/reviewService';

@Component({
  selector: 'app-accountreview',
  templateUrl: './accountreview.component.html',
  styleUrls: ['./accountreview.component.css']
})
export class AccountreviewComponent implements OnInit {


  reviews: Review[];
  constructor(private loginservice : LoginService,
    private router : Router,
    private accountService : AccountService,
    private reviewService : ReviewService) { }

  ngOnInit() {
    if(this.loginservice.activeaccount == null) {
      this.router.navigate(['account']);
    }

    this.reviewService.retrieveByUser(this.loginservice.activeaccount.id).subscribe(
      (reviews : Review[]) => this.reviews = reviews,
      (error: HttpErrorResponse) => 
        alert("Er is een fout opgetreden: " +
        error.error.error.status + " " + error.error.error + "\n" +
        "\nMessage:\n" + error.error.message 
         ),
      () =>{}
    )

  }




  DELETE() {
    this.accountService.delete(this.loginservice.activeaccount.id).subscribe(locatie  => {
      console.log(locatie)
    this.loginservice.activeaccount = null;
    this.router.navigate(['account']);
  })}

  Logout() {
    this.loginservice.activeaccount = null;
    this.router.navigate(['account']);
  }

}
