import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {ItemComponent} from "./components/item/item.component";
import {OrderComponent} from "./components/order/order.component";
import {PageOneComponent} from "./components/order/inner-items/page-one/page-one.component";
import {PageTwoComponent} from "./components/order/inner-items/page-two/page-two.component";

const routes: Routes = [
  {path: '', redirectTo: '/customer', pathMatch: 'full'},
  {path: 'customer', component: CustomerComponent},
  {path: 'item/:name', component: ItemComponent},
  {path: 'order', component: OrderComponent, children: [
      {path: 'page-one', component: PageOneComponent},
      {path: 'page-two', component: PageTwoComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
