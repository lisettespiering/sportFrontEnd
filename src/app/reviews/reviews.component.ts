import { Component, OnInit } from '@angular/core';
import { Review } from '../domain/review';

import { HttpErrorResponse } from '@angular/common/http';
import { ReviewService } from '../service/reviewService';
import { ActivatedRoute } from '@angular/router';
import { Locatie } from '../domain/locatie';
import { Account } from '../domain/account';
import { LoginService } from '../service/loginService';



@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];
  locatie: Locatie;
  public id: number;

  constructor(private route: ActivatedRoute,
    private reviewService: ReviewService,
    private loginService: LoginService) { }


  ngOnInit() {
    this.route.params.subscribe(
      (data: any) => {
        console.log(data.ids);
        this.getAllReviews(data.ids);
      },
      (error: any) => console.log(error),
      () => console.log("Gereed")
    );

    //   this.id = parseInt(  this.route.snapshot.paramMap.get('ids') );
    //   this.reviewService.selectByLocationId(this.id).subscribe(rev  => {
    //   // this.reviewService.retrieveById(this.id).subscribe(rev  => {
    //     // this.locatie = rev
    //     console.log(rev)
    // }   )  
  }
  getAllReviews(ids: any) {
    this.reviewService.selectByLocationId(ids).subscribe(
      (data: Review[])  => console.log(this.reviews = data),
      fout => console.log(fout),
      () => console.log("Gereed")
    )
  }
}




