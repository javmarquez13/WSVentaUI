import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../Service/apiauth.service';
import { Response } from '../Models/response';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../Models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm = this.fb.group({
    email: ['javmarquez13@gmail.com', Validators.required],
    password: ['123', Validators.required]
  })


  constructor(
    public apiauth: ApiAuthService,
    private router: Router,
    private fb: FormBuilder
    ){

      if(this.apiauth.userData){
        //console.log("Debugging: Auth OK redirecting to home");
        //this.router.navigate(['/']);    
      }
  }


  ngOnInit(){
    
  }


  login(){
    console.log(this.loginForm.value);
    this.apiauth.login(this.loginForm.value as Login).subscribe(response =>{   
      if(response.sucess = true){
        this.router.navigate(['/']);
      }
      
      console.log(response);


      console.log("Bracn Test");
    })
  }
}
