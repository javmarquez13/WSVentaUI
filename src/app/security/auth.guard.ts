import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApiAuthService } from "../Service/apiauth.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    
    constructor(
        private router: Router,
        private apiAuthService: ApiAuthService        
        
        ){
    }
    canActivate(route: ActivatedRouteSnapshot){
        const user = this.apiAuthService.userData;

        if(user){
            return true;
        }

        this.router.navigate(['/Login'])
        return false;
    }
}