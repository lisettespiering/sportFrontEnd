import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatieService';
import { ActivatedRoute } from '@angular/router';
import { SportService } from '../service/sportService';
import { Sport } from '../domain/sport';

@Component({
  selector: 'app-locatieupdate',
  templateUrl: './locatieupdate.component.html',
  styleUrls: ['./locatieupdate.component.css']
})
export class LocatieupdateComponent implements OnInit {

  locatie : Locatie = new Locatie();

  sporten : Sport[];

  public id: number;


  constructor(private locatieService : LocatieService,
    private route: ActivatedRoute,
    private sportService : SportService) { }

  ngOnInit() {
    this.id = parseInt(  this.route.snapshot.paramMap.get('ids') );
    this.sportService.retrieveAll().subscribe(sport  => {
      this.sporten = sport;
  })}

  verwijderen() {
    this.locatieService.delete(this.id).subscribe(locatie  => {
      console.log(locatie)

    })

  
  }

versturen() {
  this.locatie.id = this.id;
  console.log(this.locatie)
  this.locatieService.update(this.locatie).subscribe(locatie  => {
    console.log(locatie)
  })

}

}