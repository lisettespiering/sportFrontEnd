import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice: LoginService,
    private router: Router) { }

  ngOnInit() {
    if (this.loginservice.activeaccount==null) {
      this.router.navigate(['account']);
    }
  }

}
