import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferBrowserComponent } from './offer-browser.component';
import {OfferBrowserRoutingModule} from "./offer-browser-routing.module";

@NgModule({
  imports: [
    CommonModule,
    OfferBrowserRoutingModule
  ],
  declarations: [OfferBrowserComponent]
})
export class OfferBrowserModule { }
