import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth/auth-guard.service";
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const appRoutes:Routes = [
    { path:'shopping-list', canActivate:[AuthGuard], component: ShoppinglistComponent},
    { path:'**', redirectTo: 'signin'},
  ];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}