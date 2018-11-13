import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients:Ingredient[] = [];

  constructor() { 
    this.ingredients = [
      new Ingredient('Farine', '500g'),
      new Ingredient('Oeufs', '6')
    ]
  }
    
  ngOnInit() {
  }

  addNewIngredient(newIngredient){
    this.ingredients.push(newIngredient);
  }

}
