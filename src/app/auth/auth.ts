import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from '../../../node_modules/rxjs/Subject';

@Injectable() export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
         if (localStorage.getItem('connected')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/se-connecter']);
        return false;
    }
}
