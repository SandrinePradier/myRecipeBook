import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
  providers: []
})
export class RecipebookComponent implements OnInit {
  selectedRecipeFromList:Recipe;

  constructor(
    private recipeService:RecipeService,
    private dataStorageService:DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getRecipesfromFB();
  }
    
}
