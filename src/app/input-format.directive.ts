import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})

export class InputFormatDirective {
  @Input('appInputFormat') format: string = 'lowercase';

  constructor(private el: ElementRef) { }

 
  @HostListener('focus')  onFocus() {
      console.log("on focus")
    }

  @HostListener('blur') onchange() {
    let localValue: string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = localValue.toLowerCase();
    else
      this.el.nativeElement.value = localValue.toUpperCase();
  } 

 
}
