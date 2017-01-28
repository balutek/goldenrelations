import {
  Component, trigger, state, style, transition, animate, AfterViewInit, Input
} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'gr-background-loading',
  templateUrl: './background-loading.component.html',
  // host: {'class':'w-100 h-100'},
  styles: [`
    :host {
      position: fixed; 
      top: 0; left: 0; right: 0; bottom: 0
    }
    .background-rear {
      position: absolute; 
      background: no-repeat center center fixed;
      top: 0; left: 0; right: 0; bottom: 0
    }
    .background-front {
      position: absolute; 
      background: no-repeat center center fixed;
      top: 0; left: 0; right: 0; bottom: 0
    }
  `],
  animations: [
    trigger('triggerShow', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity:0
      })),
      transition('show <=> hide', animate('1000ms ease-in'))
    ])
  ]
})
export class BackgroundLoadingComponent implements AfterViewInit
{
  @Input()
  public imagesUrl: string[];

  public shouldShowFrontBackground : boolean = true;
  public showFrontBackground : boolean = false;
  public rearBackground: string = 'url(./assets/img/home_1.jpg)';
  public frontBackground: string = 'url(./assets/img/home_2.jpg)';

  private imageIndexToTake: number = 0;

  constructor(private http: Http) {
  }

  ngAfterViewInit(): void {
    let backgroundTimer = Observable.timer(0,5000);
    backgroundTimer.subscribe(x => this.loadBackgroundImage(x));
  }

  private loadBackgroundImage(num: number) {
    console.log(num);
    let imageUrl = this.imagesUrl[this.imageIndexToTake];
    console.log(num + " " + imageUrl);
    this.http.get(imageUrl)
      .subscribe((data: Response) => {
        if(data.ok) {
          if (this.shouldShowFrontBackground) {
            this.frontBackground = 'url('+ imageUrl +')';
          } else {
            this.rearBackground = 'url('+ imageUrl +')';
          }

          console.log("front and rear " + num + " " + this.frontBackground + " " + this.rearBackground);
          this.showFrontBackground = this.shouldShowFrontBackground;

          console.log(num + "showFrontBackground: " + this.showFrontBackground);
          console.log(num + "shouldShowFrontBackground: " + this.shouldShowFrontBackground);
          this.shouldShowFrontBackground = !this.shouldShowFrontBackground;
          console.log(num + "shouldShowFrontBackground: " + this.shouldShowFrontBackground);
          this.imageIndexToTake = (this.imageIndexToTake+1)%this.imagesUrl.length;
          console.log(num + "imageIndexToTake: " + this.imageIndexToTake);

        }
      });
  }

}
