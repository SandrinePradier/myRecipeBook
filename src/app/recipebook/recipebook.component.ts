import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
  providers: [RecipeService]
})
export class RecipebookComponent implements OnInit {
  selectedRecipeFromList:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  //   this.recipeService.onSelectRecipe.subscribe(
  //     (selectedRecipe) => {this.selectedRecipeFromList = selectedRecipe}
  //   )
  }
    
}
