import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { IngredientService } from './shared/ingredient.service';
import { RecipeService } from './shared/recipe.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipebook/recipes.module';
import { MaterialModule } from './shared/material.module';
import { ShoppingListModule } from './shoppinglist/shoppinglist.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    //browserModule contains all the feature of Common modules
    //plus some features only necessary at the start of the application
    //so only need in the app module
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule,
    AppRoutingModule
  ],
  providers:[IngredientService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
