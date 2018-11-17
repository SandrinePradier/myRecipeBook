import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { IngredientService } from 'src/app/shared/ingredient.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() recipeToDisplay:Recipe;
  
  constructor( private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  OnSendIngredientsToSL(ingredients){
  // console.log('i want to send the ingredients to SL:', ingredients);
  this.ingredientService.addRecipeIngredientsToSL(ingredients);
  }

}
