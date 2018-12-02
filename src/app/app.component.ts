import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
import { Subject } from 'rxjs';
import { Recipe } from './recipebook/recipe.model';
import { RecipeService } from './shared/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'recipebook';

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){}
  
  ngOnInit(){
    this.dataStorageService.getRecipesfromFB();
  }
}
