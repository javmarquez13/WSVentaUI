import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/response';

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WSVentaAPIService {

  url: string = 'https://192.168.100.14:5401/WSVenta';

  constructor(private _http: HttpClient){
   
  }

  getClientes(): Observable<Response>{
    const headers = new HttpHeaders({
      'X-Skip-Certificate-Check': 'true'
    });
    return this._http.get<Response>(this.url + '/Clientes/List', {headers});
  }
}