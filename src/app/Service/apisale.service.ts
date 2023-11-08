import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../Models/Sale';
import { Observable } from 'rxjs';


const httpOption = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Skip-Certificate-Check': 'true'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApisaleService {

  url: string = 'https://192.168.100.14:5401/WSVenta/Sale';

  constructor(private _http: HttpClient)
  {

  }



  add(Sale: Sale): Observable<Response>{
    return this._http.post<Response>(this.url, Sale, httpOption);
  }
}
