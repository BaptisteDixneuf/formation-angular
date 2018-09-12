import { Pizza } from '../models/pizza';
import { InjectionToken } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

// Création d'un token d'injection pour le service

export const MyServiceInjectionToken = new InjectionToken<IPizzaService>('IPizzaService');

export interface IPizzaService {
    getJSON(): Observable<Pizza[]>;
    addPizza(pizza: Pizza): Observable<void>;
    getPizza(name: string): Observable<Pizza>;
    deletePizza(pizza: Pizza): Observable<boolean>;
}

