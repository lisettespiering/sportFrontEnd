import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teststars',
  templateUrl: './teststars.component.html',
  styleUrls: ['./teststars.component.css']
})
export class TeststarsComponent implements OnInit {

  stervalue : number = 0;
  ster01 : String = "☆";
  ster02 : String = "☆";
  ster03 : String = "☆";
  ster04 : String = "☆";
  ster05 : String = "☆";

  constructor() { }

  ngOnInit() {
  }

  click05(){
    this.stervalue = 5;
    this.aantalSterren();
  } 

  click04(){
    this.stervalue = 4;
    this.aantalSterren();
  } 

  click03(){
    this.stervalue = 3;
    this.aantalSterren();
  }

  click02(){
    this.stervalue = 2;
    this.aantalSterren();
  }

  click01(){
    this.stervalue = 1;
    this.aantalSterren();
  }

  aantalSterren() {
    if (this.stervalue == 5) {
      this.ster05 = "★"
      this.ster04 = "★"
      this.ster03 = "★"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.stervalue == 4) {
      this.ster05 = "☆"
      this.ster04 = "★"
      this.ster03 = "★"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.stervalue == 3) {
      this.ster05 = "☆"
      this.ster04 = "☆"
      this.ster03 = "★"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.stervalue == 2) {
      this.ster05 = "☆"
      this.ster04 = "☆"
      this.ster03 = "☆"
      this.ster02 = "★"
      this.ster01 = "★"
    }
    if (this.stervalue == 1) {
      this.ster05 = "☆"
      this.ster04 = "☆"
      this.ster03 = "☆"
      this.ster02 = "☆"
      this.ster01 = "★"
    }
  }
}
