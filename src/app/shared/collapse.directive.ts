import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[collapse-on-click]'
})
export class CollapseDirective {

  isCollapsed = false;

  @HostBinding("class.collapsed")
  get collapsed(){
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }

}
