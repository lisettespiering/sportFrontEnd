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
    this.review.account = this.loginService.activeaccount;
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

  ster01 : String = "☆";
  ster02 : String = "☆";
  ster03 : String = "☆";
  ster04 : String = "☆";
  ster05 : String = "☆";

  ster11 : String = "☆";
  ster12 : String = "☆";
  ster13 : String = "☆";
  ster14 : String = "☆";
  ster15 : String = "☆";

  ster21 : String = "☆";
  ster22 : String = "☆";
  ster23 : String = "☆";
  ster24 : String = "☆";
  ster25 : String = "☆";

  ster31 : String = "☆";
  ster32 : String = "☆";
  ster33 : String = "☆";
  ster34 : String = "☆";
  ster35 : String = "☆";

  ster41 : String = "☆";
  ster42 : String = "☆";
  ster43 : String = "☆";
  ster44 : String = "☆";
  ster45 : String = "☆";

  ster51 : String = "☆";
  ster52 : String = "☆";
  ster53 : String = "☆";
  ster54 : String = "☆";
  ster55 : String = "☆";

  ster61 : String = "☆";
  ster62 : String = "☆";
  ster63 : String = "☆";
  ster64 : String = "☆";
  ster65 : String = "☆";
  
  aantalSterren0(){
    if (this.rating.totaal == 5) {
      this.ster05 = "★"
      this.ster04 = "★"
      this.ster03 = "★"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.rating.totaal == 4) {
      this.ster05 = "☆"
      this.ster04 = "★"
      this.ster03 = "★"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.rating.totaal == 3) {
      this.ster05 = "☆"
      this.ster04 = "☆"
      this.ster03 = "★"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.rating.totaal == 2) {
      this.ster05 = "☆"
      this.ster04 = "☆"
      this.ster03 = "☆"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.rating.totaal == 1) {
      this.ster05 = "☆"
      this.ster04 = "☆"
      this.ster03 = "☆"
      this.ster02 = "☆"
      this.ster01 = "★"
    }
  }

  aantalSterren1(){
    if (this.rating.moeilijkheid == 5) {
      this.ster15 = "★"
      this.ster14 = "★"
      this.ster13 = "★"
      this.ster12 = "★"
      this.ster11 = "★"
    }
    if (this.rating.moeilijkheid == 4) {
      this.ster15 = "☆"
      this.ster14 = "★"
      this.ster13 = "★"
      this.ster12 = "★"
      this.ster11 = "★"
    }
    if (this.rating.moeilijkheid== 3) {
      this.ster15 = "☆"
      this.ster14 = "☆"
      this.ster13 = "★"
      this.ster12 = "★"
      this.ster11 = "★"
    }
    if (this.rating.moeilijkheid == 2) {
      this.ster15 = "☆"
      this.ster14 = "☆"
      this.ster13 = "☆"
      this.ster12 = "★"
      this.ster11 = "★"
    }
    if (this.rating.moeilijkheid == 1) {
      this.ster15 = "☆"
      this.ster14 = "☆"
      this.ster13 = "☆"
      this.ster12 = "☆"
      this.ster11 = "★"
    }
  }

  aantalSterren2(){
    if (this.rating.locatie == 5) {
      this.ster25 = "★"
      this.ster24 = "★"
      this.ster23 = "★"
      this.ster22 = "★"
      this.ster21 = "★"
    }
    if (this.rating.locatie == 4) {
      this.ster25 = "☆"
      this.ster24 = "★"
      this.ster23 = "★"
      this.ster22 = "★"
      this.ster21 = "★"
    }
    if (this.rating.locatie== 3) {
      this.ster25 = "☆"
      this.ster24 = "☆"
      this.ster23 = "★"
      this.ster22 = "★"
      this.ster21 = "★"
    }
    if (this.rating.locatie == 2) {
      this.ster25 = "☆"
      this.ster24 = "☆"
      this.ster23 = "☆"
      this.ster22 = "★"
      this.ster21 = "★"
    }
    if (this.rating.locatie == 1) {
      this.ster25 = "☆"
      this.ster24 = "☆"
      this.ster23 = "☆"
      this.ster22 = "☆"
      this.ster21 = "★"
    }
  }

  aantalSterren3(){
    if (this.rating.personeel == 5) {
      this.ster35 = "★"
      this.ster34 = "★"
      this.ster33 = "★"
      this.ster32 = "★"
      this.ster31 = "★"
    }
    if (this.rating.personeel == 4) {
      this.ster35 = "☆"
      this.ster34 = "★"
      this.ster33 = "★"
      this.ster32 = "★"
      this.ster31 = "★"
    }
    if (this.rating.personeel== 3) {
      this.ster35 = "☆"
      this.ster34 = "☆"
      this.ster33 = "★"
      this.ster32 = "★"
      this.ster31 = "★"
    }
    if (this.rating.personeel == 2) {
      this.ster35 = "☆"
      this.ster34 = "☆"
      this.ster33 = "☆"
      this.ster32 = "★"
      this.ster31 = "★"
    }
    if (this.rating.personeel == 1) {
      this.ster35 = "☆"
      this.ster34 = "☆"
      this.ster33 = "☆"
      this.ster32 = "☆"
      this.ster31 = "★"
    }
  }

  aantalSterren4(){
    if (this.rating.sfeer == 5) {
      this.ster45 = "★"
      this.ster44 = "★"
      this.ster43 = "★"
      this.ster42 = "★"
      this.ster41 = "★"
    }
    if (this.rating.sfeer== 4) {
      this.ster45 = "☆"
      this.ster44 = "★"
      this.ster43 = "★"
      this.ster42 = "★"
      this.ster41 = "★"
    }
    if (this.rating.sfeer== 3) {
      this.ster45 = "☆"
      this.ster44 = "☆"
      this.ster43 = "★"
      this.ster42 = "★"
      this.ster41 = "★"
    }
    if (this.rating.sfeer == 2) {
      this.ster45 = "☆"
      this.ster44 = "☆"
      this.ster43 = "☆"
      this.ster42 = "★"
      this.ster41 = "★"
    }
    if (this.rating.sfeer == 1) {
      this.ster45 = "☆"
      this.ster44 = "☆"
      this.ster43 = "☆"
      this.ster42 = "☆"
      this.ster41 = "★"
    }
  }

  aantalSterren5(){
    if (this.rating.variatie == 5) {
      this.ster55 = "★"
      this.ster54 = "★"
      this.ster53 = "★"
      this.ster52 = "★"
      this.ster51 = "★"
    }
    if (this.rating.variatie== 4) {
      this.ster55 = "☆"
      this.ster54 = "★"
      this.ster53 = "★"
      this.ster52 = "★"
      this.ster51 = "★"
    }
    if (this.rating.variatie== 3) {
      this.ster55 = "☆"
      this.ster54 = "☆"
      this.ster53 = "★"
      this.ster52 = "★"
      this.ster51 = "★"
    }
    if (this.rating.variatie == 2) {
      this.ster55 = "☆"
      this.ster54 = "☆"
      this.ster53 = "☆"
      this.ster52 = "★"
      this.ster51 = "★"
    }
    if (this.rating.variatie == 1) {
      this.ster55 = "☆"
      this.ster54 = "☆"
      this.ster53 = "☆"
      this.ster52 = "☆"
      this.ster51 = "★"
    }
  }

  aantalSterren6(){
    if (this.rating.bereikbaarheid == 5) {
      this.ster65 = "★"
      this.ster64 = "★"
      this.ster63 = "★"
      this.ster62 = "★"
      this.ster61 = "★"
    }
    if (this.rating.bereikbaarheid== 4) {
      this.ster65 = "☆"
      this.ster64 = "★"
      this.ster63 = "★"
      this.ster62 = "★"
      this.ster61 = "★"
    }
    if (this.rating.bereikbaarheid== 3) {
      this.ster65 = "☆"
      this.ster64 = "☆"
      this.ster63 = "★"
      this.ster62 = "★"
      this.ster61 = "★"
    }
    if (this.rating.bereikbaarheid == 2) {
      this.ster65 = "☆"
      this.ster64 = "☆"
      this.ster63 = "☆"
      this.ster62 = "★"
      this.ster61 = "★"
    }
    if (this.rating.bereikbaarheid == 1) {
      this.ster65 = "☆"
      this.ster64 = "☆"
      this.ster63 = "☆"
      this.ster62 = "☆"
      this.ster61 = "★"
    }
  }

  click01(){
    this.rating.totaal = 1;
    this.aantalSterren0();
  }
  click02(){
    this.rating.totaal = 2;
    this.aantalSterren0();
  }
  click03(){
    this.rating.totaal = 3;
    this.aantalSterren0();
  }
  click04(){
    this.rating.totaal = 4;
    this.aantalSterren0();
  }
  click05(){
    this.rating.totaal = 5;
    this.aantalSterren0();
  }


  click11(){
    this.rating.moeilijkheid = 1;
    this.aantalSterren1();
  }
  click12(){
    this.rating.moeilijkheid = 2;
    this.aantalSterren1();
  }
  click13(){
    this.rating.moeilijkheid = 3;
    this.aantalSterren1();
  }
  click14(){
    this.rating.moeilijkheid = 4;
    this.aantalSterren1();
  }
  click15(){
    this.rating.moeilijkheid = 5;
    this.aantalSterren1();
  }

  click21(){
    this.rating.locatie = 1;
    this.aantalSterren2();
  }
  click22(){
    this.rating.locatie = 2;
    this.aantalSterren2();
  }
  click23(){
    this.rating.locatie = 3;
    this.aantalSterren2();
  }
  click24(){
    this.rating.locatie = 4;
    this.aantalSterren2();
  }
  click25(){
    this.rating.locatie = 5;
    this.aantalSterren2();
  }

  click31(){
    this.rating.personeel = 1;
    this.aantalSterren3();
  }
  click32(){
    this.rating.personeel = 2;
    this.aantalSterren3();
  }
  click33(){
    this.rating.personeel = 3;
    this.aantalSterren3();
  }
  click34(){
    this.rating.personeel = 4;
    this.aantalSterren3();
  }
  click35(){
    this.rating.personeel = 5;
    this.aantalSterren3();
  }

  click41(){
    this.rating.sfeer = 1;
    this.aantalSterren4();
  }
  click42(){
    this.rating.sfeer = 2;
    this.aantalSterren4();
  }
  click43(){
    this.rating.sfeer = 3;
    this.aantalSterren4();
  }
  click44(){
    this.rating.sfeer = 4;
    this.aantalSterren4();
  }
  click45(){
    this.rating.sfeer = 5;
    this.aantalSterren4();
  }

  click51(){
    this.rating.variatie = 1;
    this.aantalSterren5();
  }
  click52(){
    this.rating.variatie = 2;
    this.aantalSterren5();
  }
  click53(){
    this.rating.variatie = 3;
    this.aantalSterren5();
  }
  click54(){
    this.rating.variatie = 4;
    this.aantalSterren5();
  }
  click55(){
    this.rating.variatie = 5;
    this.aantalSterren5();
  }

  click61(){
    this.rating.bereikbaarheid = 1;
    this.aantalSterren6();
  }
  click62(){
    this.rating.bereikbaarheid = 2;
    this.aantalSterren6();
  }
  click63(){
    this.rating.bereikbaarheid = 3;
    this.aantalSterren6();
  }
  click64(){
    this.rating.bereikbaarheid = 4;
    this.aantalSterren6();
  }
  click65(){
    this.rating.bereikbaarheid = 5;
    this.aantalSterren6();
  }

}
