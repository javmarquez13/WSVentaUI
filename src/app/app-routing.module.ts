import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './login/login.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  
  { path: 'Clientes', component: ClientComponent, canActivate: [AuthGuard] },
  
  { path: 'Sale', component: SaleComponent, canActivate: [AuthGuard]},

  { path: 'Login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
