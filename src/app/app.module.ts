import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchSelectorComponent} from "./comp/search-selector.component";

@NgModule({
  declarations: [
    MainComponent,
    SearchSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
