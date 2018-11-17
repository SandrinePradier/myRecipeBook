import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

import { IngredientService } from './shared/ingredient.service';

import { MatButtonModule, 
          MatToolbarModule, 
          MatSidenavModule, 
          MatIconModule, 
          MatListModule, 
          MatCardModule, 
          MatFormFieldModule, 
          MatInputModule} from '@angular/material';

import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipesingleComponent } from './recipebook/recipesingle/recipesingle.component';
import { RecipedetailComponent } from './recipebook/recipesingle/recipedetail/recipedetail.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/hightlight.directive';

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
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
