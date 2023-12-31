import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { DialogClientComponent } from './client/Dialog/dialogcliente.component';
import { DialogDeleteComponent } from './Common/Delete/dialogdelete.component';
import { LoginComponent } from './login/login.component';
import { SaleComponent } from './sale/sale.component';
import { DialogSaleComponent } from './sale/dialog/dialogSale.component';

//MATERIAL MODULES
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';


//REST API
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './security/jwt.interceptor';
import { User } from './Models/User';
import { ApiAuthService } from './Service/apiauth.service';
import { Router } from '@angular/router';










@NgModule({
  declarations: [
    AppComponent,

    //COMPONENTS
    LoginComponent,
    HomeComponent,
    ClientComponent,
    DialogClientComponent,
    DialogDeleteComponent,
    SaleComponent,
    DialogSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,


    //MATERIAL MODULES
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,

    //REST API
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}