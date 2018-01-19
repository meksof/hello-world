import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  image$: any;
  imageUrl = "";

  onColor(color){
    console.log("color:", color)
  }

  ngOnInit() {    
    this.imageUrl = "http://lorempixel.com/g/350/200/";
    this.image$ = this.getImageUrl();
  }
  
  getImageUrl() {
    return Observable.of(this.imageUrl);
  }
}
