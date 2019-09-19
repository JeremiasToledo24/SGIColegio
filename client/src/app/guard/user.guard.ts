import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthServiceService} from "../servicios/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthServiceService,
              private  router: Router){
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot,
              ): boolean {
    const user = this.authService.currentUser();
    if (user) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
