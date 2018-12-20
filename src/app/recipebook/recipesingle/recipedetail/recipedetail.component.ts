import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { IngredientService } from 'src/app/shared/ingredient.service';
import { RecipeService } from 'src/app/shared/recipe.service';


@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  recipeToDisplay:Recipe;
  id:number;
  
  constructor( 
    private ingredientService: IngredientService,
    private router:Router,
    private route:ActivatedRoute,
    private recipeService:RecipeService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.recipeService.getRecipe(this.id)) {
          this.recipeToDisplay = this.recipeService.getRecipe(this.id);
        }
       else {
        this.router.navigate(['recettes'])
       }
      }
    )
  }

  OnSendIngredientsToSL(ingredients){
  // console.log('i want to send the ingredients to SL:', ingredients);
  this.ingredientService.addRecipeIngredientsToSL(ingredients);
  }

  OnClickToEdit(id){
    this.router.navigate(['../', id, 'edit'], {relativeTo:this.route})
  }

  OnClickToDelete(id){
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['recettes']);
  }

}
