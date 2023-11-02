import { Component } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private router: Router) {}

  //#region ButtonClick Animation
  onClick(ButtonName: string)
  {
    
    this.buttonState = 'active';
    setTimeout(() => this.buttonState = 'inactive', 200);

    let _args = ButtonName;

    console.log("Debug: " + _args);

    if(_args == "Hola Mundo") this.FunHolaMundo(_args);  

    if(_args == "Hola Angular") this.FunctionHolaAngular(_args);

    if(_args == "Login") this.router.navigate(['/Login']);

    if(_args == "Cliente") this.router.navigate(['/Clientes']);
  }
  //#endregion

  FunHolaMundo(args: string)
  {

    console.log(args); 

    let _data = this.data;

    let _newArray = {id: 1, name:'Javier', age: 30}


    //This is the way of how update a table using the function push
    this.data.push(_newArray);
  }

  FunctionHolaAngular(args: string)
  {
    console.log(args);

    let _newArryay = {id: 1, name:'Renata', age:7};

    this.data.push(_newArryay)
  }
}
