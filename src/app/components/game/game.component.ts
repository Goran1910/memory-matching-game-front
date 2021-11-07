import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  flips: number = 0;
  timerStopped: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  incFlips(){
    this.flips++;
  }

  stopTimer(){
    this.timerStopped = true;
  }

  finish(event: any){
    setTimeout(() => {
      let modal = document.querySelector('#modal');
      if(modal){
        modal.classList.toggle('hidden');
        let timeElement = modal.querySelector('#finalTime');
        if(timeElement){
          timeElement.innerHTML = `Time: ${event}`;
        }
      }
    }, 500);
  }

  restart(){
    this.flips = 0;
    this.timerStopped = false;
    let modal = document.querySelector('#modal');
    if(modal){
      modal.classList.toggle('hidden');
    }
  }
}
