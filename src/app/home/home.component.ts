import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../Service/apiauth.service';
import { User } from '../Models/User';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  buttonState = 'inactive';

  data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Bob Smith', age: 35 }
    // Add more data as needed
  ];

  constructor(private router: Router){
    
  }

  onClick(ButtonName: string)
  { 
    this.buttonState = 'active';
    setTimeout(() => this.buttonState = 'inactive', 200);

    let _args = ButtonName;

    if(_args == "Login") this.router.navigate(['/Login']);

    if(_args == "Cliente") this.router.navigate(['/Clientes']);

    if(_args == "Sale") this.router.navigate(['/Sale']);
  }
}
