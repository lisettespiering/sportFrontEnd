import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sport } from '../domain/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public create(sport: Sport): Observable<Sport> {
    return this.http.post<Sport>(`${environment.sportappUrl}/sport`,
        sport, this.httpOptions)
  }

  public retrieveAll(): Observable<Sport[]> {
    return this.http.get<Sport[]>(`${environment.sportappUrl}/sport`);
  }

  public retrieveById(id: number): Observable<Sport> {
    return this.http.get<Sport>(`${environment.sportappUrl}/sport/getSport/${id}`)
  }

  public update(sport: Sport): Observable<Sport> {
    return this.http.put<Sport>(`${environment.sportappUrl}/sport/${sport.id}`,
        sport, this.httpOptions)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.sportappUrl}/sport/${id}`);
  }
}
