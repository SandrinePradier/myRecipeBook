import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { IngredientService } from '../shared/ingredient.service';


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[] = [];
  private subscription: Subscription;

  constructor(private ingredientService:IngredientService) { 
  }
   
  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    //subscription to our own observalble Subject.
    // we will need to unsubscribe
    this.subscription = this.ingredientService.OnIngredientChanged.subscribe((newIngredients) => {
      this.ingredients = newIngredients;
    })
    //subscription to eventEmitter ( observalble provided by Angular)
    //Angular will unsubscribe for us
    this.ingredientService.OnSendIngredientToSL.subscribe((newIngredients) => {
      this.ingredients = newIngredients;
    })
  }

  clickToEditIngredient(ingredient){
    this.ingredientService.editIngredient(ingredient);
  }

  clickToDeleteIngredient(index){
    this.ingredientService.deleteIngredient(index);
    
  }

  //since we are using our own observalble, we need to unsubscribe when destroy component
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  
  
}
