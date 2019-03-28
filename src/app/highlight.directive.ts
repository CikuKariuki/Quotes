import { Directive,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){ }

    @HostListener('click') highestUpvote(){
      this.backgroundColor("#ffe082")
    }
    private backgroundColor(action:string){
    this.elem.nativeElement.style.backgroundColor=action;  }
}