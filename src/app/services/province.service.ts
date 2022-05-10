import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private provinceUrl = "http://192.168.1.128:3030/api/provinces/"
  
  constructor(private http: HttpClient) { }

  getProvinces(): Observable<Array<any>> {
      return this.http.get<Array<any>>(this.provinceUrl);
  }
}
