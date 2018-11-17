import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipeList:Recipe[] = [];

  constructor(private recipeService:RecipeService){}
    
  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  }

  OnClickRecipe(recipe){
    console.log('From recipe list the selected recipe is :', recipe);
    this.recipeService.onSelectRecipe.emit(recipe);
  }

}
