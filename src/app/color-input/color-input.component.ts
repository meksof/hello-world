import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.css']
})
export class ColorInputComponent implements OnInit {

  @Input() color: string;
  validColors = ['red', 'green', 'black', 'white', 'blue', 'yellow', 'brown', 'gray', 'pink'];
  constructor() { }

  ngOnInit() {
  }

  changeColor(event){
    let val = event.target.value;
    if( val != '' && this.validColors.indexOf(val) > -1 ){
      this.color = event.target.value
      console.log(event.target.value);
    }
  }

}
