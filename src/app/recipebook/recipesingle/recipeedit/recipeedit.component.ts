import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/shared/recipe.service';


@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  //editMode false is for when wr create a new recipe/
  //editMode true will be when we modify recipe
  recipeForm:FormGroup;

  constructor(private router:Router, private route:ActivatedRoute, private recipeService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
        //we will be in editMode only if there is an id already created. this is what we are checking here
      }
    )
  }

  private initForm(){

    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      //form should be prefilled with recipe
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      if (recipe.ingredients.length>0){
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup ({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, Validators.required)
            })
          )
        }
      }
    }
    
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description' : new FormControl(recipeDescription, Validators.required),
      'imagePath' : new FormControl(recipeImagePath, Validators.required),
      'ingredients' : recipeIngredients
    })
  }

  onRecipeSubmit(){
    if (this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }
    else {
      this.recipeService.createRecipe(this.recipeForm.value);
    }
    this.clear();
  }

  getIngredients():FormArray {
    return (<FormArray>this.recipeForm.get('ingredients'));
  }

  clickToAddIngredient(){
    let ingredientList = this.getIngredients();
    ingredientList.push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required)
    }
    ))
    //same as: 
    // (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
    //     'name': new FormControl(),
    //     'amount': new FormControl()
    //   }
    // ))
  }
  clickToDeleteIngredient(i){
    let ingredientList = this.getIngredients();
    ingredientList.removeAt(i);
  }

  clear(){
    this.recipeForm.reset();
    this.router.navigate(['./..'], {relativeTo: this.route})
  }

}
