import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHilight]'
})
export class HilightDirective {
  
  constructor(private el :ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.BackgroundColor('red');
}

@HostListener('mouseleave')  onMouseLeave(){
    this.BackgroundColor(null!);
}

BackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    console.log(this.el);
    
    
    
}


}
