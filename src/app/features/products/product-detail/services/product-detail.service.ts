import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {BikeDetails, BikeItemResult} from '../../../../shared/models/product.model';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  private readonly apiUrl = 'api/v3';
  private readonly bikesUrl = 'bikes';
  private http = inject(HttpClient);

  getBikeDataById(id: string): Observable<BikeDetails> {
    return this.http.get<BikeItemResult>(`${environment.baseUrl}/${this.apiUrl}/${this.bikesUrl}/${id}`).pipe(
      map((result) => result.bike),
      catchError(e => {
        console.error(e);
        return of();
      }),
    );
  }
}
