import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class OfferService {

  private host = 'http://localhost:3000/';

  constructor(private http: Http) {
  }

  getCities() : Observable<string[]> {
    return this.http.get(this.host + `offers`)
    .map(resp => resp.json())
    .map(offer => offer.city)
  }

  getOffers() : Observable<Offer[]> {
    return this.http.get(this.host + `offers`)
    .map(res => res.json());
  }

}
