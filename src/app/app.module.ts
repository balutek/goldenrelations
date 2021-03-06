import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { MainComponent } from './main.component';

import { BackgroundLoadingComponent } from './effect/background-loading.component';
import { ListSelectComponent } from './comp/list-select/list-select.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {OfferModule} from "./offer/offer.module";

@NgModule({
  declarations: [
    MainComponent,
    BackgroundLoadingComponent,
    ListSelectComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OfferModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
