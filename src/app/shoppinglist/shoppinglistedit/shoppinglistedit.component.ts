import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientService } from 'src/app/shared/ingredient.service';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {

  @ViewChild('ingredientInput') ingredientInput:ElementRef;
  @ViewChild('quantityInput') quantityInput:ElementRef;
  addedIngredient:Ingredient;

  constructor(private ingredientService:IngredientService) {}

  ngOnInit() {

  }
  addIngredient(){
    this.addedIngredient = new Ingredient(this.ingredientInput.nativeElement.value, this.quantityInput.nativeElement.value);
    console.log(this.addedIngredient);
    this.ingredientService.addNewIngredient(this.addedIngredient);
    this.ingredientInput.nativeElement.value = '';
    this.quantityInput.nativeElement.value = '';

    }
}
