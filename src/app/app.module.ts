import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchSelectorComponent} from "./comp/search-selector.component";
import { ResultListComponent } from './result/result-list.component';
import { BorderedPanelComponent } from './comp/panel/bordered-panel.component';
import { BackgroundLoadingComponent } from './effect/background-loading.component';

@NgModule({
  declarations: [
    MainComponent,
    SearchSelectorComponent,
    ResultListComponent,
    BorderedPanelComponent,
    BackgroundLoadingComponent
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
