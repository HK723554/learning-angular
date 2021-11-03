import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.borderBottom = "yellow";
    element.nativeElement.style.fontWeight = 20;

  }

}
