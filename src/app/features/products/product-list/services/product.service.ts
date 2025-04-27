import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {Bike, BikeListResult} from '../../../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = 'api/v3';
  private readonly searchUrl = 'search';
  private http = inject(HttpClient);

  getBikeList(): Observable<Bike[]> {
    return this.http.get<BikeListResult>(`${environment.baseUrl}/${this.apiUrl}/${this.searchUrl}/`).pipe(
      map(result => result.bikes),
      catchError(e => {
        console.error(e);
        return of([]);
      }),
    );
  }
}
