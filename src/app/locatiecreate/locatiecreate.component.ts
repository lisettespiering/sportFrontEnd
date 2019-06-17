import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatie';
import { SportService } from '../service/sport';
import { Sport } from '../domain/sport';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locatiecreate',
  templateUrl: './locatiecreate.component.html',
  styleUrls: ['./locatiecreate.component.css']
})
export class LocatiecreateComponent implements OnInit {

  locatie : Locatie = new Locatie();
  
  sporten : Sport[];

  constructor(private locatieService : LocatieService,
            private sportService : SportService,
            private router : Router) { }

  ngOnInit() {
    this.sportService.retrieveAll().subscribe(sport  => {
      this.sporten = sport;
  })}

  versturen() {

    this.locatieService.create(this.locatie).subscribe(
        locatie  => { console.log(locatie) },
        error => console.log(error.message),
        () => this.router.navigate(['locaties'] )
               )



  }

}
