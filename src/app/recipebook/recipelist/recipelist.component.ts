import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipeList:Recipe[] = [];

  @Output() onSelectRecipe = new EventEmitter();

  constructor() { 
    this.recipeList = [
      new Recipe('Choux à la creme', 'décilieux petits choux à la crème fouétée', './assets/images/cream-puff.jpg' ),
      new Recipe('Tiramisu', 'Le vrai tiramisu traditionnel au café', './assets/images/tiramisu.jpg'),
      new Recipe('Mousse au chocolat', 'Mousse au chocolat légère', './assets/images/mousseauchocolat.jpg')
    ]
  }
    
  ngOnInit() {
  }

  OnClickRecipe(recipe){
    console.log('From recipe list the selected recipe is :', recipe);
    this.onSelectRecipe.emit(recipe);
  }

}
