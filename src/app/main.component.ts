import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gr-main',
  template: `
<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <gr-search-selector [availableElements]="['hahaha', 'hehehe', 'hohohoh']"></gr-search-selector>
    </div>
    <div class="col-md-6"></div>
    <div class="col-md-3"></div>
  </div>
</div>
`
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
