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
  
  imageUrl = "http://lorempixel.com/g/350/200/";
  imageLoading: boolean; // handle loading message

  constructor(){
    this.imageLoading = true;
  }


  // Loading images from a remote link
  onLoad() {
    this.imageLoading = false;
  }
}
