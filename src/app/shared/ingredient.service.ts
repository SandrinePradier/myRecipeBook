import { EventEmitter } from '@angular/core';

import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

export class IngredientService {
    private ingredients:Ingredient[] =  [
        new Ingredient('Farine', '500g'),
        new Ingredient('Oeufs', '6')
    ]

    // OnIngredientChanged = new EventEmitter<Ingredient[]>();
    OnIngredientChanged = new Subject<Ingredient[]>();
    OnIngredientEdit = new Subject<number>();
    OnIngredientRemoved = new Subject<number>();
    //i leave it with EventEmitter so that i can see 2 ways ( event and observable)
    OnSendIngredientToSL = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index){
        return this.ingredients[index];
    }

    addNewIngredient(newIngredient){
        this.ingredients.push(newIngredient);
        this.OnIngredientChanged.next(this.ingredients)
        // console.log('from service, added indgredient:', newIngredient);
    }
    
    addRecipeIngredientsToSL(ingredientList){
        // ingredientList.forEach(element => {
        //     this.ingredients.push(element);
        // }); same as:
        this.ingredients.push(...ingredientList);
        this.OnSendIngredientToSL.emit(this.ingredients);
    }

    editIngredient(index:number){
        this.OnIngredientEdit.next(index);

        //On clik on a ingredient:
        // -> property editMode change to true
        //-> button ajouter turns into modifier
        //-> fields load the ingredient data ( use 2 way databinding?)
        //-> on clik on modifier button, the data ingredient save if any change
        //-> a clear button enable to reset the fields.
    }

    updateIngredient(index:number, updatedIngredient:Ingredient){
        console.log('this.ingredients[index]', this.ingredients[index]);
        console.log('updatedIngredient', updatedIngredient);
        this.ingredients[index].name = updatedIngredient.name;
        this.ingredients[index].amount = updatedIngredient.amount;
        this.OnIngredientChanged.next(this.ingredients)
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.OnIngredientChanged.next(this.ingredients);
    }

}