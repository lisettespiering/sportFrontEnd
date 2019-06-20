import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/loginService';

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
    if (this.loginservice.activeaccount == null) {
      this.router.navigate(['account'] )
    } else if (this.id != this.loginservice.activeaccount.id) {
      this.router.navigate(['/locaties/reviews/reviewerror'] )
    }
  }

}
