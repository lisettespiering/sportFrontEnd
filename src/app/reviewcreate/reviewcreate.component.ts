import { Component, OnInit } from '@angular/core';
import { Review } from '../domain/review';
import { ReviewService } from '../service/reviewService';
import { LocatieService } from '../service/locatieService';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-reviewcreate',
  templateUrl: './reviewcreate.component.html',
  styleUrls: ['./reviewcreate.component.css']
})
export class ReviewcreateComponent implements OnInit {

  ngOnInit() {

  }
}
//   constructor(private reviewService : ReviewService,
//     private route: ActivatedRoute,
//     private locatieService : LocatieService
//     ) { }

//   public id: number;


//   ngOnInit() {
//     this.id = parseInt(  this.route.snapshot.paramMap.get('ids') );
//     this.locatieService.retrieveById(this.id).subscribe()}

// }
