import { NgModule } from "@angular/core";
import { ShoppinglistComponent } from "./shoppinglist.component";
import { ShoppinglisteditComponent } from "./shoppinglistedit/shoppinglistedit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";


@NgModule({
    declarations: [
        ShoppinglistComponent,
        ShoppinglisteditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ]
})
export class ShoppingListModule {}