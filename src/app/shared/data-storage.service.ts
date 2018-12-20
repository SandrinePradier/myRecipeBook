import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipebook/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    
    recipesLoaded = new Subject<Recipe[]>();
    
    constructor( private httpClient:HttpClient,
                 private recipeService:RecipeService,
                 private authService: AuthService){}
    
    storeRecipes(){
        const token = this.authService.getToken();
        return this.httpClient.put(
            'https://ngrecipebook-52d11.firebaseio.com/recipes.json?auth='+token, 
            this.recipeService.getRecipes());
        }
        
    getRecipesfromFB(){
        // console.log('calling getRecipesfromFB');
        const token = this.authService.getToken();
        // console.log('token from getRecipesfromFB:', token);
        this.httpClient.get<Recipe[]>('https://ngrecipebook-52d11.firebaseio.com/recipes.json?auth='+token)
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