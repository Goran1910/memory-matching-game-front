import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  seconds: number = 0;
  timeFormatted: string = '00:00';

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(){
    setInterval(() => {
      this.seconds++;
      this.formatTime();
    },1000)
  }

  formatTime(){
    let quotient = Math.floor(this.seconds / 60);
    let reminder = this.seconds % 60;
    if(quotient < 10 && reminder < 10){
      this.timeFormatted = `0${quotient}:0${reminder}`;
      return;
    } else if(quotient < 10 && reminder >= 10){
      this.timeFormatted = `0${quotient}:${reminder}`;
      return;
    } else if(quotient >= 10 && reminder >= 10){
      this.timeFormatted = `${quotient}:${reminder}`;
      return;
    } else{
      this.timeFormatted = `${quotient}:0${reminder}`;
      return;
    }
  }

}
