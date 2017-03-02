import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {OfferStore} from "../store/offer.store";
import {Observable} from "rxjs";

@Component({
  selector: 'gr-offer-browser',
  templateUrl: './offer-browser.component.html',
  styles: []
})
export class OfferBrowserComponent implements OnInit {

  constructor(private offerStore: OfferStore,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params : Params) => {
      return this.offerStore.loadOffers()
    });
  }

  get offers() : Observable<Offer[]> {
    return this.offerStore.offers
  }

}
