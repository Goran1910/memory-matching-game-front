import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  flips: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  incFlips(){
    this.flips++;
  }

}
