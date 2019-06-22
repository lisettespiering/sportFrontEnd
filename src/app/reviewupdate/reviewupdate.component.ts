import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/loginService';
import { ReviewService } from '../service/reviewService';
import { Review } from '../domain/review';


@Component({
  selector: 'app-reviewupdate',
  templateUrl: './reviewupdate.component.html',
  styleUrls: ['./reviewupdate.component.css']
})

export class ReviewupdateComponent implements OnInit {

  id : number;
  review : Review;
  constructor(private route : ActivatedRoute,
              private loginservice : LoginService,
              private router: Router,
              private reviewService : ReviewService) {}

  ngOnInit() {
    this.id = parseInt(  this.route.snapshot.paramMap.get('ids') );

    if (this.loginservice.activeaccount == null) {
      this.router.navigate(['account'] )
    } 

    this.reviewService.retrieveById(this.id).subscribe(
      review  => {console.log(this.review = review);
        if (this.review.account.id != this.loginservice.activeaccount.id) {
          this.router.navigate(['locaties/reviews/reviewerror'] )
        }
      },
      fout => {console.log(fout)}
    )
   
    
  }
}