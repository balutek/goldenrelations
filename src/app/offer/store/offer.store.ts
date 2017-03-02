import { Injectable } from '@angular/core';
import {OfferService} from "../service/offer.service";
import {Observable, ReplaySubject} from "rxjs";

@Injectable()
export class OfferStore {

  _offers: ReplaySubject<Offer[]> = new ReplaySubject();
  _cities: ReplaySubject<string[]> = new ReplaySubject();

  constructor(private offerService: OfferService) {
  }

  loadOffers() {
    this.offerService.getOffers()
    .subscribe((offers: Offer[]) => this._offers.next(offers))
  }

  get offers() : Observable<Offer[]> {
    return Observable.from(this._offers);
  }

  loadCities() {
    this.offerService.getCities()
    .subscribe((cities: string[]) => this._cities.next(cities))
  }

  get cities() : Observable<string[]> {
    return Observable.from(this._cities);
  }

}
