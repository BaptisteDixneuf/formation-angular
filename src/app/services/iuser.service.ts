import { InjectionToken } from '@angular/core';
import { User } from '../models/user';
import { Subject } from '../../../node_modules/rxjs/Subject';


// Création d'un token d'injection pour le service

export const MyServiceUserInjectionToken = new InjectionToken<IUserService>('IUserService');

export interface IUserService {

    seconnecter(user: User): boolean;
    getSubject(): Subject<boolean>;
}

