import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferBrowserComponent } from './offer-browser/offer-browser.component';
import {OfferRoutingModule} from "./offer-routing.module";
import {OfferService} from "./service/offer.service";
import {OfferStore} from "./store/offer.store";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    OfferRoutingModule
  ],
  declarations: [
    OfferBrowserComponent
  ],
  providers: [OfferService, OfferStore]
})
export class OfferModule { }
