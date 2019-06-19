import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../domain/account';
import { Review } from '../domain/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public create(review: Review): Observable<Review> {
    return this.http.post<Review>(`${environment.sportappUrl}/review`,
        review, this.httpOptions)
  }

  public retrieveAll(): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.sportappUrl}/review`);
  }

  public retrieveById(id: number): Observable<Review> {
    return this.http.get<Review>(`${environment.sportappUrl}/review/${id}`)
  }

  public update(review: Review): Observable<Review> {
    return this.http.put<Review>(`${environment.sportappUrl}/review/${review.id}`,
        review, this.httpOptions)
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.sportappUrl}/review/${id}`);
  }
  public retrieveByUser(id : number): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.sportappUrl}/review/getReviewByUser/${id}`);
  }

}