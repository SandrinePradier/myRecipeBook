import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipebook/recipe.model'
import { Ingredient } from './ingredient.model';

export class RecipeService {
    private recipeList:Recipe[] =  [
          new Recipe(
            'Choux à la creme', 
            'décilieux petits choux à la crème fouétée', 
            './assets/images/cream-puff.jpg',
            [ new Ingredient('Farine', '500g'), new Ingredient('Lait', '20cl'), new Ingredient('Creme entiere', '20cl') ]
            ),
          new Recipe(
            'Tiramisu', 
            'Le vrai tiramisu traditionnel au café',
            './assets/images/tiramisu.jpg',
            [ new Ingredient('Macarpone', '500g'), new Ingredient('Café', '20cl'), new Ingredient('Boudoirs', '400g'), new Ingredient('Amareto', '1c à soupe') ]
            ),
          new Recipe(
            'Mousse au chocolat', 
            'Mousse au chocolat légère',
            './assets/images/mousseauchocolat.jpg',
            [ new Ingredient('Chocolat patissier', '250g'), new Ingredient('Lait', '20cl') ]
            )
        ]
    onSelectRecipe = new EventEmitter<Recipe>();

    getRecipes(){
        //this methods enable to limit the access to the list, and get only a copy
        return this.recipeList.slice();
    }
}