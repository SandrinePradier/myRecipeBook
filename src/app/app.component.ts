import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipebook';
  displayShoppingList:boolean;

  goToShoppingList(eventdata){
    console.log('eventdata:', eventdata)
    if (eventdata) {
      this.displayShoppingList = true;
    }
    else {
      this.displayShoppingList = false;
    }
  }
}
