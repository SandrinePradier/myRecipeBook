import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { MaterialModule } from "../shared/material.module";
import { AuthRoutingModule } from "./auth-routing.module";


@NgModule({
    declarations:[
        SignupComponent,
        SigninComponent,
    ],
    imports:[
        CommonModule,
        MaterialModule,
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{}