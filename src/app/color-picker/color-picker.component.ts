import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as Const from '../../app/shared/constants';
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent {

  @Input() color: string;

  @Output('color') colorOutput = new EventEmitter();

  choose(color: string){
    this.color = color;
    this.colorOutput.emit(color);
  }

  reset() {
    this.choose('#000')
  }

}