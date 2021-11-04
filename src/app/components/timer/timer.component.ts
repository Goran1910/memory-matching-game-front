import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(){
    setInterval(() => {
      this.seconds++;
    },1000)
  }

}
