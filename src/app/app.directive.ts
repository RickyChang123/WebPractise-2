import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class AppDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    const element = this.el.nativeElement as HTMLElement;

    if (element) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const opacity = Math.min(scrollTop / 300, 1);
      element.style.opacity = opacity.toString();
    }
  }
}
