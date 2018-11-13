import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
@ViewChild('ingredientInput') ingredientInput:ElementRef;
@ViewChild('quantityInput') quantityInput:ElementRef;
@Output() OnIngredientAdded = new EventEmitter();
addedIngredient:Ingredient;


  constructor() { }ingredient

  ngOnInit() {

  }
  addIngredient(){
    this.addedIngredient = new Ingredient(this.ingredientInput.nativeElement.value, this.quantityInput.nativeElement.value);
    console.log(this.addedIngredient);
    this.OnIngredientAdded.emit(this.addedIngredient);
    this.ingredientInput.nativeElement.value = '';
    this.quantityInput.nativeElement.value = '';

    }
}
