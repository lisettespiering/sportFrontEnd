import { Component, OnInit } from '@angular/core';
import { Review } from '../domain/review';
import { ReviewService } from '../service/reviewService';
import { HttpErrorResponse } from '@angular/common/http';
import { LocatieService } from '../service/locatieService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];
  // constructor(private reviewservice: ReviewService) { }

  // ngOnInit() {
  //   this.reviewservice.retrieveAll().subscribe(
  //     (reviews: Review[]) => this.reviews = reviews,
  //     (error: HttpErrorResponse) => 
  //       alert("Er is een fout opgetreden: " +
  //       error.error.error.status + " " + error.error.error + "\n" +
  //       "\nMessage:\n" + error.error.message 
  //        ),
  //     () =>{}
  //   )

    constructor(private reviewService : ReviewService,
      private route: ActivatedRoute,
      private locatieService : LocatieService
      ) { }
  
    public id: number;
  
  
    ngOnInit() {
      // this.id = parseInt(  this.route.snapshot.paramMap.get('ids') );
      // this.reviewService.retrieveById().subscribe()}
  
  }
  
}

