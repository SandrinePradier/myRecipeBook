import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() recipeToDisplay:Recipe;

  constructor() { }

  ngOnInit() {
    // console.log(this.recipeToDisplay);
  }

}
