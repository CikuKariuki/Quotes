import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;

  @Output() isComplete=new EventEmitter<boolean>();
  @Output() isLike=new EventEmitter<boolean>();
  @Output() isDislike=new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  likeQuote(plus:boolean){
    this.isLike.emit(plus);
  }
  dislikeQuote(minus:boolean){
    this.isDislike.emit(minus);
  }

  constructor() { }

  ngOnInit() {
  }

}
