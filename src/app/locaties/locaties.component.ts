import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatie';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-locaties',
  templateUrl: './locaties.component.html',
  styleUrls: ['./locaties.component.css']
})
export class LocatiesComponent implements OnInit {

  locaties: Locatie[];
  constructor(private locatieservice: LocatieService) { }

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

}

