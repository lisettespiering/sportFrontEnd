import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatie';
import { SportService } from '../service/sport';
import { Sport } from '../domain/sport';

@Component({
  selector: 'app-locatiecreate',
  templateUrl: './locatiecreate.component.html',
  styleUrls: ['./locatiecreate.component.css']
})
export class LocatiecreateComponent implements OnInit {

  locatie : Locatie = new Locatie();
  
  sport : Sport;
  sportstring : String;

  constructor(private locatieService : LocatieService,
            private sportService : SportService) { }

  ngOnInit() {
  }

  versturen() {

    if (this.sportstring == "duiken") {
      this.sportService.retrieveById(1).subscribe(sport => {
        //console.log(sport);
        this.sport = sport
      })
    }
    else if (this.sportstring == "boulderen") {
      this.sportService.retrieveById(2).subscribe(sport  => {
        //console.log(sport);
        this.sport = sport
      })
    }

    this.locatie.sport = this.sport;

    this.locatieService.create(this.locatie).subscribe(locatie  => {
      console.log(locatie)

    })

  }

}
