import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    
  }
 

  @HostListener('mouseleave') onMouseLeave(){

  }


  @HostListener('click', ['$event'])
  run(event: Event) {
    alert('Hello World')
    console.log("bj");
    
  }
}
