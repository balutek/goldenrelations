import {Component, Input, HostListener, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'gr-list-select',
  templateUrl: './list-select.component.html',
  host: {
    'class': 'list-group'
  },
  styles: [`
    :host {margin-top: 20px;}
  `],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class ListSelectComponent implements OnInit {


  @Input()
  listSelectElements: Array<ListSelectElement>;
  selectedElement: ListSelectElement;

  showAll: boolean = false;
  @HostListener('mouseover') showAllElements() {
    this.showAll = true;
  }
  @HostListener('mouseleave') hideUnselectedElements() {
    this.showAll = false;
  }

  constructor() { }

  ngOnInit(): void {
    this.selectedElement = this.listSelectElements[0];
  }

  selectElement(selectedElement: ListSelectElement) {
    this.selectedElement = selectedElement;
  }

  isSelected(listElement: ListSelectElement) {
    return listElement == this.selectedElement;
  }

}
