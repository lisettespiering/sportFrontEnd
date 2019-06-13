import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatie';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-locatieupdate',
  templateUrl: './locatieupdate.component.html',
  styleUrls: ['./locatieupdate.component.css']
})
export class LocatieupdateComponent implements OnInit {

  locatie : Locatie = new Locatie();

  public id: number;

  constructor(private locatieService : LocatieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(  this.route.snapshot.paramMap.get('ids') );
  }

  verwijderen() {
    this.locatieService.delete(this.id).subscribe(locatie  => {
      console.log(locatie)

    })

  
}
}