import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ItemComponent } from './components/item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderComponent } from './components/order/order.component';
import { PageOneComponent } from './components/order/inner-items/page-one/page-one.component';
import { PageTwoComponent } from './components/order/inner-items/page-two/page-two.component';
import {SortPipe} from "./sort.pipe";
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoadingComponent} from "./components/loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent,
    PageOneComponent,
    PageTwoComponent,
    SortPipe,
    PostsComponent,
    CommentsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
