import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { ApiAuthService } from "../Service/apiauth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    
    constructor(private apiauthService: ApiAuthService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
        const user = this.apiauthService.userData;

        console.log(`Debugging: ${user}`);

        if(user){
            request = request.clone({
                setHeaders:{
                    Authorization: `Bearer ${user.token}`
                }
            })
        }

        return next.handle(request);
    }
}