import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchSelectorComponent} from "./unused/search-selector.component";
import { BackgroundLoadingComponent } from './effect/background-loading.component';
import {Select2Module} from "ng2-select2";
import { ListSelectComponent } from './comp/list-select/list-select.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {OfferBrowserModule} from "./offer-browser/offer-browser.module";

@NgModule({
  declarations: [
    MainComponent,
    SearchSelectorComponent,
    BackgroundLoadingComponent,
    ListSelectComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    NgbModule.forRoot(),
    OfferBrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
