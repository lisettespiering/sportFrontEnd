import { Component, OnInit } from '@angular/core';
import { Review } from '../domain/review';
import { ReviewService } from '../service/reviewService';
import { LocatieService } from '../service/locatieService';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from '../domain/rating';
import { RatingService } from '../service/ratingService';
import { LoginService } from '../service/loginService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingCreateComponent } from '../rating-create/rating-create.component'
import { Locatie } from '../domain/locatie';


@NgModule({
  imports: [BrowserModule],
  declarations: [ReviewcreateComponent, RatingCreateComponent],
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

  review: Review = new Review();
  rating: Rating = new Rating()
  bijzonderheden: string;
  locatieId: number;


  constructor(private reviewService: ReviewService,
    private loginService: LoginService,
    private ratingService: RatingService,
    private router: Router,
    private route: ActivatedRoute) {
    // let rate1 = new Rating()
    // this.ratereview = {
    // rate: ['totaal','moeilijkheid','locatie','personeel','sfeer','variatie','bereikbaarheid']
  }

  ngOnInit() {
    if (this.loginService.activeaccount == null) {
      this.router.navigate(['account'] )
    }
      this.route.params.subscribe(
      (data: any) => { console.log(data); this.locatieId  = data.ids; },
      (error: any) => console.log(error),
      () => console.log("Gereed")
      )
    // this.review.account = this.loginService.activeaccount;
  }

  versturen() {
    this.review.rating = this.rating
    console.log(this.rating)
    console.log(this.review)
    this.review.bijzonderheden = [this.bijzonderheden]

    this.ratingService.create(this.rating).subscribe(
      rating => {
        this.review.rating = rating;
        let locatie: Locatie = new Locatie();
        locatie.id = this.locatieId;
        this.review.locatie = locatie;
        console.log(rating);

        this.reviewService.create(this.review).subscribe(
          review => {
            console.log("review togevoegd");
            console.log(review);
            this.review = review;

          },
          error => console.log(error.message),
          () => this.router.navigate(['locaties', 'reviews', this.locatieId ]))
          

      },
      error => console.log(error.message)
    );


  }

}
