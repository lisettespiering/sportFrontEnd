import { Component, OnInit } from '@angular/core';
import { Rating } from '../domain/rating';
import { RatingService } from '../service/ratingService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rating-create',
  templateUrl: './rating-create.component.html',
  styleUrls: ['./rating-create.component.css']
})
export class RatingCreateComponent implements OnInit {

rating : Rating = new Rating();
  
  // sporten : Sport[];

  constructor(private ratingService : RatingService,
            // private sportService : SportService,
            private router : Router) { }

  ngOnInit() {
    }

  versturen() {

    this.ratingService.create(this.rating).subscribe(
        rating  => { console.log(rating) },
        error => console.log(error.message),
        () => this.router.navigate(['ratings'] )
               )
  }
}
