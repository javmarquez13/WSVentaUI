import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/response';

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../Models/Client';


const httpOption = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Skip-Certificate-Check': 'true'
  })
}


@Injectable({
  providedIn: 'root'
})
export class apiclient {

  url: string = 'https://192.168.100.14:5401/WSVenta/Clientes';

  constructor(private _http: HttpClient){
   
  }

  getClientes(): Observable<Response>{

    const headers = new HttpHeaders({
      'X-Skip-Certificate-Check': 'true'
    });

    return this._http.get<Response>(`${this.url}/List`, {headers});
  }

  Add(client: Client): Observable<Response>{
    return this._http.post<Response>(`${this.url}/Add`, client, httpOption);
  }


  Edit(client: Client): Observable<Response>{
    return this._http.put<Response>(`${this.url}/Edit`, client, httpOption);
  }

  Delete(id: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/Delete/${id}`, httpOption);
  }

}