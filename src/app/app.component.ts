import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './shared/recipe.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'recipebook';

  constructor(
    private dataStorageService: DataStorageService, 
    private recipeService: RecipeService,
    private authService: AuthService){}
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDH24vCvsrjp4r4QDGUDsZhJy9ZM5SWqGs",
      authDomain: "ngrecipebook-52d11.firebaseapp.com"
    });
    this.dataStorageService.getRecipesfromFB();
  }
}
