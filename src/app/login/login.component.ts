import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../Service/apiauth.service';
import { Response } from '../Models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(public apiauth: ApiAuthService){

  }


  ngOnInit(){
    
  }


  login(){
    this.apiauth.login(this.email, this.password).subscribe(response =>{
      console.log(response);
    })
  }
}
