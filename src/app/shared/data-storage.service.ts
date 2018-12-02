import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipebook/recipe.model";

@Injectable()
export class DataStorageService {
    
    recipesLoaded = new Subject<Recipe[]>();
    
    constructor(private httpClient:HttpClient, private recipeService:RecipeService){}
    
    storeRecipes(){
        return this.httpClient.put(
            'https://ngrecipebook-52d11.firebaseio.com/recipes.json', 
            this.recipeService.getRecipes());
        }
        
    getRecipesfromFB(){
        console.log('i am calling FB');
        this.httpClient.get<Recipe[]>('https://ngrecipebook-52d11.firebaseio.com/recipes.json')
        .pipe( map(
            (recipes:Recipe[]) => {
                for (let recipe of recipes){
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        )
        .subscribe(
            (recipes:Recipe[]) => {
                console.log('recipes from data storage:', recipes);
                this.recipeService.loadRecipes(recipes);
            }
        )
    }
}