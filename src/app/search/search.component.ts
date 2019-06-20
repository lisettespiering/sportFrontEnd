import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatieService';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  zoekterm : String;
  locaties: Locatie[];
  constructor(private locatieservice: LocatieService,
              private router : Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.zoekterm = this.route.snapshot.paramMap.get('term') ;
    this.locatieservice.searchquerry(this.zoekterm).subscribe(
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