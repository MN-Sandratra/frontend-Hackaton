import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotelsUrl = environment.baseUrl+"/api/hotels/";
  
  constructor(private http: HttpClient) { }

  getHotels(): Observable<Array<any>> {
      return this.http.get<Array<any>>(this.hotelsUrl);
  }
}
