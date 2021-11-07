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
  automaticFlip: any;

  @Output()
  flippedCard: EventEmitter<any> = new EventEmitter();

  @Output()
  finishedEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.shuffle();
  }

  incFlippedCards(indexOfCurrentlyFlippedCard: string){
    this.flippedCard.emit('');
    this.flippedCards++;
    if(this.flippedCards === 2){
      this.flipAutomatic();
      this.checkIfCorrect();
    }
    if(this.flippedCards > 2){
      clearTimeout(this.automaticFlip);
      this.flippedCards = 0;
      this.flipAll(indexOfCurrentlyFlippedCard);
    } 
  }

  decFlippedCards(){
    this.flippedCard.emit('');
    this.flippedCards--;
  }

  flipAutomatic(){
    this.automaticFlip = setTimeout(() => {
      this.flipAll(undefined);
    }, 1000)
  }

  flipAll(index: string | undefined){
    let flipped = document.querySelectorAll('.background.hide');
    flipped.forEach(f => {
      let parent = f.closest('app-card');
      if(parent?.getAttribute('data-index') !== index && !parent?.classList.contains('solved')){
        parent?.querySelector('.foreground')?.classList.toggle('hide');
        f.classList.toggle('hide');
      }
    });
    if(index){
      this.flippedCards = 1;
    } else{
      this.flippedCards = 0;
    }
    
  }

  checkIfCorrect(){
    let flipped = document.querySelectorAll('.background.hide');
    let sources: any[] = [];
    let parents: any[] = [];
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
      this.playCorrectAudio();
      this.checkIfFinished();
    }
  }

  checkIfFinished(): boolean{
    let cards = document.querySelectorAll('app-card');
    let finished = true;

    cards.forEach(card => {
      if(!card.classList.contains('solved')){
        finished = false;
      }
    })
    if(finished){
      this.finishedEvent.emit('');
    }
    return true;
  }

  playCorrectAudio(){
    let audio = new Audio();
    audio.src = '../../assets/sounds/correct.wav';
    audio.load();
    audio.play();
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
