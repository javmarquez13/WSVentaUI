import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/response';


const httpOption = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Skip-Certificate-Check': 'true'
    })
  }

@Injectable({
    providedIn: 'root'
})

export class ApiAuthService{

    url: string = 'https://192.168.100.14:5401/WSVenta/Users/Login';

    constructor(private _http: HttpClient){

    }

    login(email: string, password: string): Observable<Response>{
        return this._http.post<Response>(this.url, {email, password}, httpOption);
    }

}