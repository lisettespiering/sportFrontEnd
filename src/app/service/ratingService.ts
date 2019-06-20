import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rating } from '../domain/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public create(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(`${environment.sportappUrl}rating/createRating`,
        rating, this.httpOptions)
  }

  public retrieveAll(): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${environment.sportappUrl}rating`);
  }

  public retrieveById(id: number): Observable<Rating> {
    return this.http.get<Rating>(`${environment.sportappUrl}rating/${id}`)
  }

  public update(rating: Rating): Observable<Rating> {
    return this.http.put<Rating>(`${environment.sportappUrl}/rating/${rating.id}`,
        rating, this.httpOptions)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.sportappUrl}/rating/${id}`);
  }
}
