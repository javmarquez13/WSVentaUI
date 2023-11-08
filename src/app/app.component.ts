import { Component } from '@angular/core';
import { User } from './Models/User';
import { ApiAuthService } from './Service/apiauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WSVentasUI';
  user: User | undefined;  

  constructor(public apitAuth: ApiAuthService,
    private router: Router)
  {
    this.apitAuth.User.subscribe(res =>{
    this.user = res;
    console.log(`Object has changed:  ${res}`);
    });
  }


Logout(){
  console.log("Clicked");
  this.apitAuth.logOut();
  this.router.navigate(['/Login']);

}

}






