import { Directive, ElementRef, OnInit } from "@angular/core";

// This directive directly access the DOM
@Directive({
  selector: '[appBasicHighlight]' // To called as a attribute of the html element
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
