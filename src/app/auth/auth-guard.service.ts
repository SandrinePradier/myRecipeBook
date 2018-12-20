import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService,
                private router:Router){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot)
                : boolean {
        return this.authService.isAuthenticated()
    }
}