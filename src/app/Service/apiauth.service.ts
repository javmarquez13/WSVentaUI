import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Response } from '../Models/response';
import { User } from '../Models/User';
import { map } from 'rxjs/operators';
import { Login } from '../Models/login';


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

    private userSubject: BehaviorSubject<User>;


    public get userData(): User{
        return this.userSubject.value;
    }

    constructor(private _http: HttpClient){

        this.userSubject= 
        new BehaviorSubject<User>(JSON.parse(localStorage.getItem('User') || '{}'));       
    }

    login(login: Login): Observable<Response>{
        return this._http.post<Response>(this.url, login, httpOption).pipe(
            map(res => {
                if(res.sucess = true){
                    const myUser: User = res.data;
                    localStorage.setItem('User', JSON.stringify(myUser));
                    this.userSubject.next(myUser);
                }

                return res;
            })
        );      
    }



    logOut(){
        localStorage.removeItem('User');
        this.userSubject.next(null!);
    }



}