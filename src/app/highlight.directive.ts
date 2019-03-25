import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}
  
  //@HostListener("click") onUpvote(){
  //   this.textDeco("line-through")
  // }Put functions for highlighting the quote with the most upvotes.

  

    private backgroundColor(action:string){
    this.elem.nativeElement.style.backgroundColor='#f8bbd0';
   }

}
