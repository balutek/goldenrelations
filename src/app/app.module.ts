import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchSelectorComponent} from "./comp/search-selector.component";
import { ResultListComponent } from './result/result-list.component';
import { BackgroundLoadingComponent } from './effect/background-loading.component';
import {Select2Module} from "ng2-select2";
import { ListSelectComponent } from './comp/list-select/list-select.component';

@NgModule({
  declarations: [
    MainComponent,
    SearchSelectorComponent,
    ResultListComponent,
    BackgroundLoadingComponent,
    ListSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
