import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/account';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accountcreate',
  templateUrl: './accountcreate.component.html',
  styleUrls: ['./accountcreate.component.css']
})
export class AccountcreateComponent implements OnInit {

  account : Account = new Account();
  
  wachtwoordcheck : String;

  constructor(private accountService : AccountService) { }

  ngOnInit() {
  }

}

