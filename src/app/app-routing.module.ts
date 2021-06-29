import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:BooklistComponent},
  {path:"cart",component:CartComponent},
  {path:"success",component:OrdersuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
