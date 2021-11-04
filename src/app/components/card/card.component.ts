import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() 
  image = '';

  @Output()
  cardFlippedUp: EventEmitter<any> = new EventEmitter();

  @Output()
  cardFlippedDown: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  flip(event: any){
    this.playAudio();
    let source = event.srcElement;
    let parent = source.closest('app-card');
    source?.classList.toggle('hide');
    if(source.id == 'foreground'){
      parent.querySelector('#background')?.classList.toggle('hide');
      this.cardFlippedDown.emit('');
    } else{
      parent.querySelector('#foreground')?.classList.toggle('hide');
      this.cardFlippedUp.emit(parent.getAttribute('data-index'));
    }

    

    //source?.querySelector('#foreground').classList.toggle('hide');


    /*document.querySelector('#card')?.classList.toggle('background');
    document.querySelector('#content')?.classList.toggle('hide');*/
    
  }

  playAudio(){
    let audio = new Audio();
    audio.src = '../../assets/sounds/flip.wav';
    audio.load();
    audio.play();
  }
}
