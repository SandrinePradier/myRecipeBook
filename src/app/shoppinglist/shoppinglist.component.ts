import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { IngredientService } from '../shared/ingredient.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients:Ingredient[] = [];

  constructor(private ingredientService:IngredientService) { 
  }
   
  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientService.OnIngredientAdded.subscribe((newIngredients) => {
      this.ingredients = newIngredients;
    })
    this.ingredientService.OnSendIngredientToSL.subscribe((newIngredients) => {
      this.ingredients = newIngredients;
    })
  }
  
}
