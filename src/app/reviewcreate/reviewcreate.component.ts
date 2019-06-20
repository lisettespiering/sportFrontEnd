import { Component, OnInit } from '@angular/core';
import { Review } from '../domain/review';
import { ReviewService } from '../service/reviewService';
import { LocatieService } from '../service/locatieService';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '../domain/rating';
import { RatingService } from '../service/ratingService';
import { LoginService } from '../service/loginService'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingCreateComponent } from '../rating-create/rating-create.component'


@NgModule({
  imports: [BrowserModule],
  declarations: [ReviewcreateComponent,RatingCreateComponent],
  bootstrap: [ReviewcreateComponent]
})

@Component({
  selector: 'app-reviewcreate',
  templateUrl: './reviewcreate.component.html',
  styleUrls: ['./reviewcreate.component.css']
})
export class ReviewcreateComponent implements OnInit {

  // ratereview: any;
  // rates: Rating[] = [];
  review : Review = new Review();
  // rating : Rating = new Rating()


  constructor(private reviewService : ReviewService,
              private loginService : LoginService,
              private ratingService : RatingService) { 
                // let rate1 = new Rating()
                // this.ratereview = {
                  // rate: ['totaal','moeilijkheid','locatie','personeel','sfeer','variatie','bereikbaarheid']
                }
              
            
  ngOnInit(){
    // this.review.account = this.loginService.activeaccount;
  }

  versturen() {
    // this.ratingService.create(this.rating).subscribe(rating => console.log(rating))
    this.reviewService.create(this.review).subscribe(review  => console.log(review))

  }
  
}
