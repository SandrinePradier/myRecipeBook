import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css']
})
export class RecipebookComponent implements OnInit {
  @Input() selectedRecipeFromList:Recipe;

  constructor() { }

  ngOnInit() {
  }

  receiveRecipeDetail(selectedRecipe){
    // console.log( 'from recipeBook the selected recipe is:', selectedRecipe);
    this.selectedRecipeFromList = selectedRecipe;
    // console.log('In recipeBook, selectedRecipeFromList:', this.selectedRecipeFromList);
  }
}
