import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1, "You don't have to see the whole staircase, just take the first step. ","Author: Martin Luther King","",0,0,new Date(2019,2,24)),
    new Quote(2, "A smooth sea never made a skilled sailor.","Author: English Proverb","",0,0,new Date(2019,2,24)),
    new Quote(3, "Learn from yesterday, live for today, hope for tomorrow.","Author: Albert Einstein","",0,0,new Date(2019,2,24)),
    new Quote(4, "The best and most beautiful things in the world cannot be seen or touched. They must be felt with the heart.","Author: Helen Keller","",0,0,new Date(2019,2,24)),
    new Quote(5, "Great thoughts speak only to the thoughtful mind, but great actions speak to all  mankind.","Author: Emily P. Bissell","",0,0,new Date(2019,2,24)),
    new Quote(6, "We don't see things as they are, we see things as we are.", "Author: Anais Nin","",0,0,new Date(2019,2,24)),
    new Quote(7, "Kind words can be short and easy to speak, but their echoes are truly endless.", "Author: Mother Teresa","",0,0,new Date(2019,2,24)),
    new Quote(8, "We are not rich by what we possess rather by what we can do without.", "Author: Immanuel Kant","",0,0,new Date(2019,2,24)),
    new Quote(9, "Most folks are about as happy as they make up their minds to be.", "Author: Abraham Lincoln","",0,0,new Date(2019,2,24)),
    new Quote(10, "You don't get harmony when everybody sings the same note.", "Author: Doug Floyd","",0,0,new Date(2019,2,24))
  ]
  toggleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm('Are you sure you want to delete this quote?')

      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }  
  likeVote(isLike,index){
    if(isLike){
      this.quotes[index].upVote+=1;
    }
  }
  dislikeVote(isDislike, index){
    if (isDislike){
      this.quotes[index].downVote+=1;
    }
  }
  // preNum:number
  // lastNum:number
  // counter:number
  // highestUpvote(){
  //   this.preNum=0
  //   this.lastNum=0

  //   for (this.counter=0; this.counter < this.quotes.length;this.counter++){
  //     this.lastNum=this.quotes[this.counter].upVote;
  //     if(this.lastNum>this.preNum){this.preNum=this.lastNum}
  //     return this.preNum
  //   }
  // }
  constructor() { }

  ngOnInit() {
  }

}
