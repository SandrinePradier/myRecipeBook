import { Directive, ElementRef, Renderer2, OnInit, HostListener } from "@angular/core";
import { MockNgModuleResolver } from "@angular/compiler/testing";


@Directive({
    selector:'[hightlight]'
})
export class HighlightDirective implements OnInit {
    
    constructor(private elRef:ElementRef, private renderer:Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    }

    @HostListener('mouseover') onMouseOver(eventData:Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'WhiteSmoke');
    }
    @HostListener('mouseleave') onMouseLeave(eventData:Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    }
}