import { Component, OnInit } from '@angular/core';
import { Review } from '../domain/review';
import { ReviewService } from '../service/reviewService';
import { LocatieService } from '../service/locatieService';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '../domain/rating';
import { RatingService } from '../service/ratingService';



@Component({
  selector: 'app-reviewcreate',
  templateUrl: './reviewcreate.component.html',
  styleUrls: ['./reviewcreate.component.css']
})
export class ReviewcreateComponent implements OnInit {

  review : Review = new Review();
  rating : Rating = new Rating()


  constructor(private reviewService : ReviewService,
              private loginService : LoginService,
              private ratingService : RatingService) { }

  ngOnInit(){
    this.review.account = this.loginService.account
  }

  versturen() {
    this.ratingService.create(this.rating).subscribe(rating => console.log(rating))
    this.reviewService.create(this.review).subscribe(review  => {
      console.log(review)
    })

  }
