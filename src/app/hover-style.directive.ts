import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {


  @Input() borderColor?: string;
  @Input() fontWeight?: string;
  constructor(private elm: ElementRef) {}
  @HostListener('mouseenter') hoverE(){
    this.hoverEnter(this.borderColor, this.fontWeight)
  }
  @HostListener('mouseleave') hoverL(){
    this.hoverLeave(this.borderColor, this.fontWeight)
  }

  private hoverEnter(color?: string,fontWeight?: string){
    if (color) {
      this.elm.nativeElement.style.borderBottom = `5px solid ${color}`;
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = fontWeight;
    }
  }

  private hoverLeave(color?: string,fontWeight?: string){
    if (color) {
      this.elm.nativeElement.style.borderBottom = ``;
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }
}
