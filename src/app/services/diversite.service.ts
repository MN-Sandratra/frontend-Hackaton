import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiversiteService {
  private diversiteUrl = "http://192.168.1.128:3030/api/locaux/"
  
  constructor(private http: HttpClient) { }

  getDiversites(): Observable<Array<any>> {
      return this.http.get<Array<any>>(this.diversiteUrl);
  }
}
