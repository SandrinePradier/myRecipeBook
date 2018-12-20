import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipebookComponent } from "./recipebook.component";
import { RecipelistComponent } from "./recipelist/recipelist.component";
import { RecipesingleComponent } from "./recipesingle/recipesingle.component";
import { RecipedetailComponent } from "./recipesingle/recipedetail/recipedetail.component";
import { RecipeeditComponent } from "./recipesingle/recipeedit/recipeedit.component";
import { HighlightDirective } from "../shared/hightlight.directive";
import { recipesRoutingModules } from "./recipes-routing.module";
import { MaterialModule } from "../shared/material.module";


@NgModule({
    declarations: [
        RecipebookComponent,
        RecipelistComponent,
        RecipesingleComponent,
        RecipedetailComponent,
        RecipeeditComponent,
        HighlightDirective
    ],
    imports: [
        //common module gives access to all ng directives.
        //it is part of the BrowserModule
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        recipesRoutingModules
    ]

})
export class RecipesModule {}