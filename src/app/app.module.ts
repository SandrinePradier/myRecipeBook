import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IngredientService } from './shared/ingredient.service';

import { HighlightDirective } from './shared/hightlight.directive';
import { RecipeService } from './shared/recipe.service';

import { MatButtonModule, 
          MatToolbarModule, 
          MatSidenavModule, 
          MatIconModule, 
          MatListModule, 
          MatCardModule, 
          MatFormFieldModule, 
          MatInputModule,
          MatMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipesingleComponent } from './recipebook/recipesingle/recipesingle.component';
import { RecipedetailComponent } from './recipebook/recipesingle/recipedetail/recipedetail.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RecipeeditComponent } from './recipebook/recipesingle/recipeedit/recipeedit.component';




@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    RecipebookComponent,
    RecipelistComponent,
    RecipesingleComponent,
    RecipedetailComponent,
    ShoppinglisteditComponent,
    MainNavComponent,
    RecipeeditComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers:[IngredientService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
