import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Locatie } from '../domain/locatie';

@Injectable({
  providedIn: 'root'
})
export class LocatieService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public create(locatie : Locatie): Observable<Locatie> {
    return this.http.post<Locatie>(`${environment.sportappUrl}/locatie/createLocatie`,
        locatie, this.httpOptions)
  }

  public retrieveAll(): Observable<Locatie[]> {
    return this.http.get<Locatie[]>(`${environment.sportappUrl}/locatie/getLocatie/`);
  }

  public retrieveById(id: number): Observable<Locatie> {
    return this.http.get<Locatie>(`${environment.sportappUrl}/locatie/getLocatie/${id}`)
  }

  public update(locatie: Locatie): Observable<Locatie> {
    return this.http.put<Locatie>(`${environment.sportappUrl}/locatie/updateLocatie/${locatie.id}`,
        locatie, this.httpOptions)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.sportappUrl}/locatie/deleteLocatie/${id}`);
  }
  public searchquerry(str : String): Observable<Locatie[]> {
    return this.http.get<Locatie[]>(`${environment.sportappUrl}/locatie/searchLocatie/${str}`)
  }

}
