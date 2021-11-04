import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards = ['../../assets/images/srba.jpg', '../../assets/images/pas.jpg', '../../assets/images/macka.jpg']
  flippedCards = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incFlippedCards(indexOfCurrentlyFlippedCard: string){
    console.log(indexOfCurrentlyFlippedCard);
    this.flippedCards++;
    if(this.flippedCards > 2){
      this.flippedCards = 0;
      this.flipAll(indexOfCurrentlyFlippedCard);
    } 
  }

  decFlippedCards(){
    this.flippedCards--;
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
