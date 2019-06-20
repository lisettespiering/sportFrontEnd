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
  constructor(private route : ActivatedRoute,
              private loginservice : LoginService,
              private router: Router) {}

  ngOnInit() {
    this.id = parseInt(  this.route.snapshot.paramMap.get('ids') );
  }
}