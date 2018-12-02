import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  
  // @Output() clickOnShoppingList = new EventEmitter<boolean>();
  // goToShoppingList:boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private dataStorageService:DataStorageService) {}

  saveRecipes(){
    this.dataStorageService.storeRecipes()
    .subscribe((response)=> console.log('response:', response));
  }

  // fetchRecipes(){
  //   this.dataStorageService.getRecipesfromFB()
  //   .subscribe((response) => console.log('response:', response));
  // }

}