import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {


  constructor(private el: ElementRef) {
   }
   @HostListener('window:click', ['$event']) windowClick($event) {
     $event = this.el.nativeElement.style.color = '#' + String($event.x);    
   }

}
