import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'products-list-component',
    component:ProductsListComponent
  },
  {
    path : 'users-list-component' ,
    component: UsersListComponent
  },
  {
    path : 'orders-list-component' ,
    component: OrdersListComponent
  },
  {
    path : 'form-component',
    component : FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
