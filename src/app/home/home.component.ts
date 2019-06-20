import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/loginService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice: LoginService,
    private router: Router) { }

    naam : String;

  ngOnInit() {
    if (this.loginservice.activeaccount!=null) {
       this.naam = this.loginservice.activeaccount.naam;
    } else {
      this.naam = "gast"
    }
  }

}
