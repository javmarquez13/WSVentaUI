import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

    ClientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
