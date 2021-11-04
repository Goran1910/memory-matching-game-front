import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards = ['../../assets/images/srba.jpg', '../../assets/images/pas.jpg', '../../assets/images/macka.jpg']
  flippedCards = 0;

  @Output()
  flippedCard: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incFlippedCards(indexOfCurrentlyFlippedCard: string){
    this.flippedCard.emit('');
    this.flippedCards++;
    if(this.flippedCards > 2){
      this.flippedCards = 0;
      this.flipAll(indexOfCurrentlyFlippedCard);
    } 
  }

  decFlippedCards(){
    this.flippedCards--;
    this.flippedCard.emit('');
  }

  flipAll(index: string){
    let flipped = document.querySelectorAll('.background.hide');
    flipped.forEach(f => {
      let parent = f.closest('app-card');
      if(parent?.getAttribute('data-index') !== index){
        parent?.querySelector('.foreground')?.classList.toggle('hide');
        f.classList.toggle('hide');
      }
    });
    this.flippedCards = 1;
  }

}
