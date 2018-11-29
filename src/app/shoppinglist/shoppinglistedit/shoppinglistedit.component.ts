import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientService } from 'src/app/shared/ingredient.service';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
  addedIngredient:Ingredient;
  editMode:boolean = false;
  action:string = 'Ajouter'
  indexOfTheIngredientToUpdate:number;
  ingredientToUpdate:Ingredient;
  private subscription: Subscription;

  constructor(private ingredientService:IngredientService) {}

  ngOnInit() {
    this.subscription =  this.ingredientService.OnIngredientEdit.subscribe(
      (index) => {
        this.editMode = true;
        this.action = 'Modifier';
        console.log('typeof', typeof index);
        this.indexOfTheIngredientToUpdate = index;
        console.log( ' this.indexOfTheIngredientToUpdate:',  this.indexOfTheIngredientToUpdate)
        this.ingredientToUpdate = this.ingredientService.getIngredient(index);
        this.slForm.setValue({
          name: this.ingredientToUpdate.name,
          amount: this. ingredientToUpdate.amount
        })
      }
    )
  }

  HandleIngredient(form:NgForm){
    console.log(form);
    if (this.editMode === true){
      this.ingredientService.updateIngredient(this.indexOfTheIngredientToUpdate, form.value);
      form.resetForm();
      this.editMode = false;
      this.action = 'Ajouter';
    }
    else {
      console.log('-->');
      this.addedIngredient = new Ingredient(form.value.name, form.value.amount);
      console.log(this.addedIngredient);
      this.ingredientService.addNewIngredient(this.addedIngredient);
      form.resetForm();
      this.action = 'Ajouter';
    }
  }

  OnClear(){
    this.slForm.resetForm();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
