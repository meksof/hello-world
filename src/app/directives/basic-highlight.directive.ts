import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(public elementRef: ElementRef) {
  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = '#eee';    
    this.elementRef.nativeElement.style.padding = '15px';    
  }

}
