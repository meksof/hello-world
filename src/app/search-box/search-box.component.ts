import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input('placeholder')
  text = 'Type your search';

  clear(input){
    input.value = '';
  }

}
