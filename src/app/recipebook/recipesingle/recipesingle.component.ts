import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipesingle',
  templateUrl: './recipesingle.component.html',
  styleUrls: ['./recipesingle.component.css']
})
export class RecipesingleComponent implements OnInit {
  @Input('recipe') recipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
