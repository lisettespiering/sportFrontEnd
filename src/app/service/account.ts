import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../domain/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public create(account: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.sportappUrl}/account`,
        account, this.httpOptions)
  }

  public retrieveAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.sportappUrl}/account`);
  }

  public retrieveById(id: number): Observable<Account> {
    return this.http.get<Account>(`${environment.sportappUrl}/account/${id}`)
  }

  public update(account: Account): Observable<Account> {
    return this.http.put<Account>(`${environment.sportappUrl}/account/${account.id}`,
        account, this.httpOptions)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.sportappUrl}/account/${id}`);
  }
}
