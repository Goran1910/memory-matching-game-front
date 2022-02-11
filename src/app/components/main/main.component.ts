import { Component, OnInit } from '@angular/core';
import { types } from 'src/app/entity/game';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  types: string[] = [];

  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      console.log(res);
      
      this.types = res;
    })
  }

}
