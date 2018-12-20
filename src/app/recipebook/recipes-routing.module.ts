import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeeditComponent } from "./recipesingle/recipeedit/recipeedit.component";
import { RecipedetailComponent } from "./recipesingle/recipedetail/recipedetail.component";
import { RecipebookComponent } from "./recipebook.component";
import { AuthGuard } from "../auth/auth-guard.service";

const recipesRoutes:Routes = [
    { path:'recettes', canActivate:[AuthGuard], component: RecipebookComponent, children:[
        { path: 'new', component: RecipeeditComponent },
        { path: ':id', component: RecipedetailComponent },
        { path: ':id/edit', component: RecipeeditComponent }
      ]},
];


@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
})
export class recipesRoutingModules {

}