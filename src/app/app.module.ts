import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { DialogClientComponent } from './Dialog/dialogcliente.component';
import { DialogDeleteComponent } from './Common/Delete/dialogdelete.component';

//MATERIAL MODULES
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


//REST API
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,

    //COMPONENTS
    ClientComponent,
    HomeComponent,
    DialogClientComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,


    //MATERIAL MODULES
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,


    //REST API
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
