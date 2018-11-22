import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  constructor(private breakpointObserver: BreakpointObserver) {}

  // displayShoppingList(){
  //   console.log('I want to see shopping list');
  //   this.goToShoppingList = true;
  //   this.clickOnShoppingList.emit(this.goToShoppingList);
  // }

  // displayrecettes(){
  //   console.log('I want to display recettes');
  //   this.goToShoppingList = false;
  //   this.clickOnShoppingList.emit(this.goToShoppingList);
  // }

}