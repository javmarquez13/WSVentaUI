import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../Service/apiauth.service';
import { Response } from '../Models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(
    public apiauth: ApiAuthService,
    private router: Router
    ){

  }


  ngOnInit(){
    
  }


  login(){
    this.apiauth.login(this.email, this.password).subscribe(response =>{
      
      if(response.sucess = true){
        this.router.navigate(['/']);
      }
      
      console.log(response);
    })
  }
}
