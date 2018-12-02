import { Recipe } from '../recipebook/recipe.model'
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipeList:Recipe[] = [];

    // private recipeList:Recipe[] =  [
    //       new Recipe(
    //           1,
    //         'Choux à la creme', 
    //         'décilieux petits choux à la crème fouétée', 
    //         './assets/images/cream-puff.jpg',
    //         [ new Ingredient('Farine', '500g'), new Ingredient('Lait', '20cl'), new Ingredient('Creme entiere', '20cl') ]
    //         ),
    //       new Recipe(
    //           2,
    //         'Tiramisu', 
    //         'Le vrai tiramisu traditionnel au café',
    //         './assets/images/tiramisu.jpg',
    //         [ new Ingredient('Macarpone', '500g'), new Ingredient('Café', '20cl'), new Ingredient('Boudoirs', '400g'), new Ingredient('Amareto', '1c à soupe') ]
    //         ),
    //       new Recipe(
    //           3,
    //         'Mousse au chocolat', 
    //         'Mousse au chocolat légère',
    //         './assets/images/mousseauchocolat.jpg',
    //         [ new Ingredient('Chocolat patissier', '250g'), new Ingredient('Lait', '20cl') ]
    //         )
    //     ]
    //     // ./assets/images/Soupe-à-loignon.jpg
    
    loadRecipes(recipes:Recipe[]){
            this.recipeList = recipes;
            this.recipesChanged.next(this.recipeList);
    }
    
    getRecipes(){
        //this methods enable to limit the access to the list, and get only a copy
        return this.recipeList.slice();
    }

    getRecipe(id:number){
        let selected =  this.recipeList.filter((element) => {return element.id === id});
        return selected[0];
    }

    createRecipe(recipeObject){
        let newId = this.recipeList.length +1;
        let newRecipe = new Recipe(
            newId,
            recipeObject.name,
            recipeObject.description,
            recipeObject.imagePath,
            recipeObject.ingredients
        )
        this.recipeList.push(newRecipe);
        this.recipesChanged.next(this.recipeList);
    }

    updateRecipe(id:number, recipeObject:Recipe){
        let newRecipe = new Recipe(
            id,
            recipeObject.name,
            recipeObject.description,
            recipeObject.imagePath,
            recipeObject.ingredients
        )
        let recipeToUpdate = this.getRecipe(id);
        let recipeIndex = this.recipeList.indexOf(recipeToUpdate)
        this.recipeList[recipeIndex] = newRecipe;
        this.recipesChanged.next(this.recipeList);
    }

    deleteRecipe(id:number){
        let recipeToUpdate = this.getRecipe(id);
        let recipeIndex = this.recipeList.indexOf(recipeToUpdate);
        this.recipeList.splice(recipeIndex, 1);
        this.recipesChanged.next(this.recipeList);
    }
}