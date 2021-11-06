import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards = ['../../assets/images/srba.jpg',
   '../../assets/images/pas.jpg',
   '../../assets/images/macka.jpg',
   '../../assets/images/srba.jpg',
   '../../assets/images/pas.jpg',
   '../../assets/images/macka.jpg'
  ]
  flippedCards = 0;

  @Output()
  flippedCard: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.shuffle();
  }

  incFlippedCards(indexOfCurrentlyFlippedCard: string){
    this.flippedCard.emit('');
    this.flippedCards++;
    if(this.flippedCards === 2){
      this.checkIfCorrect();
    }
    if(this.flippedCards > 2){
      this.flippedCards = 0;
      this.flipAll(indexOfCurrentlyFlippedCard);
    } 
  }

  decFlippedCards(){
    this.flippedCard.emit('');
    this.flippedCards--;
  }

  flipAll(index: string){
    let flipped = document.querySelectorAll('.background.hide');
    flipped.forEach(f => {
      let parent = f.closest('app-card');
      if(parent?.getAttribute('data-index') !== index && !parent?.classList.contains('solved')){
        parent?.querySelector('.foreground')?.classList.toggle('hide');
        f.classList.toggle('hide');
      }
    });
    this.flippedCards = 1;
  }

  checkIfCorrect(){
    let flipped = document.querySelectorAll('.background.hide');
    let sources: any[] = [];
    let parents: any[] = [];
    /*let parent1 = flipped[0].closest('app-card');
    let parent2 = flipped[1].closest('app-card');
    let src1 = parent1?.querySelector('.foreground')?.getAttribute('src');
    let src2 = parent2?.querySelector('.foreground')?.getAttribute('src');*/
    flipped.forEach(f => {
      let parent = f.closest('app-card');
      if(!parent?.classList.contains('solved')){
        sources.push(parent?.querySelector('.foreground')?.getAttribute('src'));
        parents.push(parent);
      }
    })

    if(sources[0] === sources[1]){
      parents[0].classList.add('solved');
      parents[1].classList.add('solved');
      this.checkIfFinished();
    }
  }

  deleteMatched(node1: Element, node2: Element){
    /*setTimeout(() => {
      node1.remove();
      node2.remove();
    }, 1000);*/
  }

  checkIfFinished(): boolean{
    let cards = document.querySelectorAll('app-card');
    let finished = true;
    console.log(cards);

    cards.forEach(card => {
      if(!card.classList.contains('solved')){
        console.log('ne');
        finished = false;
      }
    })
    console.log('Finished!');
    return true;
  }

  shuffle() {
    var m = this.cards.length, t, i;

    while (m) {

      i = Math.floor(Math.random() * m--);
  
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }

  }
}
