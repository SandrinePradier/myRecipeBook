import { EventEmitter } from '@angular/core';

import { Ingredient } from './ingredient.model';

export class IngredientService {
    private ingredients:Ingredient[] =  [
        new Ingredient('Farine', '500g'),
        new Ingredient('Oeufs', '6')
      ]
    OnIngredientAdded = new EventEmitter<Ingredient[]>();
    OnSendIngredientToSL = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    addNewIngredient(newIngredient){
        this.ingredients.push(newIngredient);
        this.OnIngredientAdded.emit(this.ingredients)
        // console.log('from service, added indgredient:', newIngredient);
    }
    
    addRecipeIngredientsToSL(ingredientList){
        // ingredientList.forEach(element => {
        //     this.ingredients.push(element);
        // }); same as:
        this.ingredients.push(...ingredientList);
        this.OnSendIngredientToSL.emit(this.ingredients);
    }

}