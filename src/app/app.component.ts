import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
quotes = [
  new Quote(1, "You don't have to see the whole staircase, just take the first step. ","Martin Luther King"),
  new Quote(2, "A smooth sea never made a skilled sailor","English Proverb"),
  new Quote(3, "Learn from yesterday, live for today, hope for tomorrow","Albert Einstein"),
  new Quote(4, "The best and most beautiful things in the world cannot be seen or touched. They must be felt with the heart","Helen Keller"),
  new Quote(5, "Great thoughts speak only to the thoughtful mind, but great actions speak to all  mankind.","Emily P. Bissell"),
  new Quote(6, "We don't see things as they are, we see things as we are", "Anais Nin"),
  new Quote(7, "Kind words can be short and easy to speak, but their echoes are truly endless.", "Mother Teresa"),
  new Quote(8, "We are not rich by what we possess rather by what we can do without.", "Immanuel Kant"),
  new Quote(9, "Most folks are about as happy as they make up their minds to be.", "Abraham Lincoln"),
  new Quote(10, "You don't get harmony when everybody sings the same note", "Doug Floyd")
]

}
