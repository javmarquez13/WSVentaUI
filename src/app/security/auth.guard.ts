import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApiAuthService } from "../Service/apiauth.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    
    constructor(
        private router: Router,
        private apiAuth: ApiAuthService        
        
        ){
    }
    canActivate(route: ActivatedRouteSnapshot){
        const user = this.apiAuth.userData

        console.log("Object has changed user:" + user.email);

        if(user.email != undefined){
            return true;
        }

        this.router.navigate(['/Login'])
        return false;
    }
}