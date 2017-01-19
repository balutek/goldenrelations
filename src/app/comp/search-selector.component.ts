import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";

import * as _ from 'lodash';

@Component({
  selector: 'gr-search-selector',
  templateUrl: './search-selector.component.html',
  styles: []
})
export class SearchSelectorComponent {

  @Input()
  availableElements: any[] = ['example1', 'example3'];

  @Input()
  displayValueFunction: (value: any) => string;

  usedElements: any[] = [];

  model: any;

  constructor() { }

  search = (text: Observable<string>) =>
  {
    return text
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.getUnusedElements()
          .filter(v => new RegExp(term, 'gi').test(this.displayValue(v)))
          .splice(0, 10)
      );
  };

  public onSelectItem(event: NgbTypeaheadSelectItemEvent)
  {
    this.usedElements.push(event.item);
  }

  public onItemRemove(element: any)
  {
    this.usedElements.splice(this.usedElements.indexOf(element), 1);
  }



  public displayValue(element: any) : string
  {
    if (this.displayValueFunction == null)
    {
      return <string> element;
    }
    return this.displayValueFunction(element);
  }

  private getUnusedElements(): any[]
  {
    return _.difference(this.availableElements, this.usedElements);
  }

}
