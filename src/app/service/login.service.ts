import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../domain/account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  activeaccount : Account;

  constructor(private http: HttpClient) { }

  loginUser(email: string, wachtwoord: string ) : Observable<Account> {
    var account : Account = new Account();
    account.email = email;
    account.wachtwoord = wachtwoord;

    console.log(`${environment.sportappUrl}/account/login`);
    console.log(account);

  return this.http.put<Account>(`${environment.sportappUrl}/account/login`,
        account, this.httpOptions)

  }
}
