import { Component, OnInit } from '@angular/core';
import { Review } from '../domain/review';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/loginService';
import { ReviewService } from '../service/reviewService';

@Component({
  selector: 'app-reviewdelete',
  templateUrl: './reviewdelete.component.html',
  styleUrls: ['./reviewdelete.component.css']
})
export class ReviewdeleteComponent implements OnInit {

  id : number;
  review : Review;
  accountcheck : boolean = false;
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
        } else {this.accountcheck = true}
      },
      fout => {console.log(fout)}
    )
  }

  
  DELETE() {
    if (this.accountcheck) {
    this.reviewService.delete(this.id).subscribe(review  => {
      console.log(review)
    this.router.navigate(['account']);
  })}}

}
