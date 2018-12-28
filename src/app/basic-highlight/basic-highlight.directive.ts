import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
        this.elementRef.nativeElement.style.textAlign = 'center';
        this.elementRef.nativeElement.style.fontSize = '3.5rem';
        this.elementRef.nativeElement.style.padding = '5%';
    }
}