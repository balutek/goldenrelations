import {Component, OnInit} from "@angular/core";
import {Select2OptionData} from "ng2-select2";

@Component({
  selector: 'gr-main',
  templateUrl: './main.component.html',

})
export class MainComponent implements OnInit
{
  ngOnInit(): void {
    this.data = [
      {id:'chu', text:'Chujek'},
      {id:'chuj', text:'Chujeczek'}
    ];
  }
  public data: Array<Select2OptionData>;
}
