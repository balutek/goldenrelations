import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {OfferBrowserComponent} from "./offer-browser/offer-browser.component";

const offersRoutes : Routes = [
  {path: 'offers', component: OfferBrowserComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(offersRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OfferRoutingModule { }
