import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipedetailComponent } from './recipebook/recipesingle/recipedetail/recipedetail.component';
import { RecipeeditComponent } from "./recipebook/recipesingle/recipeedit/recipeedit.component";

const appRoutes:Routes = [
    { path:'', redirectTo: '/recettes', pathMatch:'full'},
    { path:'recettes', component: RecipebookComponent, children:[
      { path: 'new', component: RecipeeditComponent },
      { path: ':id', component: RecipedetailComponent },
      { path: ':id/edit', component: RecipeeditComponent }
    ]},
    { path:'shopping-list', component: ShoppinglistComponent}
  ];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}