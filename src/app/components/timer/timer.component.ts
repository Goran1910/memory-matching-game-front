import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {

  seconds: number = 0;
  timeFormatted: string = '00:00';
  intervalId: any;

  @Input()
  shouldStop: boolean = false;

  @Output()
  finalTime: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    /*this.startTimer();*/
  }

  ngOnChanges(){
    if(this.shouldStop){
      this.finalTime.emit(this.timeFormatted);
      clearInterval(this.intervalId);
    } else{
      this.startTimer();
      this.seconds = 0;
    }
  }

  startTimer(){
    this.intervalId = setInterval(() => {
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
