import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatieService';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locaties',
  templateUrl: './locaties.component.html',
  styleUrls: ['./locaties.component.css']
})
export class LocatiesComponent implements OnInit {

  zoekterm : String;
  locaties: Locatie[];
  constructor(private locatieservice: LocatieService,
              private router : Router) { }

  ngOnInit() {
    this.locatieservice.retrieveAll().subscribe(
      (locaties: Locatie[]) => this.locaties = locaties,
      (error: HttpErrorResponse) => 
        alert("Er is een fout opgetreden: " +
        error.error.error.status + " " + error.error.error + "\n" +
        "\nMessage:\n" + error.error.message 
         ),
      () =>{}
    )
  }

  versturen() {
    this.router.navigate(['locaties/searchq/' + this.zoekterm] )
  }

}

