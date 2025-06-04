import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router,  } from '@angular/router';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router ,private userService:UsersService) {} 
  canActivate(route: ActivatedRouteSnapshot): boolean { 
    let userRole=  this.userService.getUserRole()
    const requiredRole = route.data['role'];
    console.log(requiredRole);
    
    
    
    if (requiredRole.includes(userRole)) { 
      return true; // Autoriser la navigation 
    } else { 
       this.router.navigate(['/']); // Rediriger vers la page de login 
      return false; // Bloquer la navigation 
    } 
  }
  
}
