import { Component, OnInit } from '@angular/core';
import { types } from 'src/app/entity/game';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  types = types;

  constructor() { }

  ngOnInit(): void {
  }

}
