import { Injectable } from '@angular/core';
import { IPizzaService } from './ipizza.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Pizza } from '../models/pizza';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class PizzaService implements IPizzaService {

  private pizzaCache: Pizza[];

  constructor(private http: Http) {
  }

  public getJSON(): Observable<Pizza[]> {
    if (!this.pizzaCache) {
      const result = this.http.get('./assets/pizzas.json').map(r => this.getPizzasFromResponse(r));
      return result;
    } else {
      return Observable.of(this.pizzaCache);
    }
  }

  private getPizzasFromResponse(response: Response): Pizza[] {
      const jsonPizzas: Pizza[]  = response.json();
      const pizzas: Pizza[] = [];

      for (const jsonPizza of jsonPizzas) {
        const pizza = new Pizza();
        Object.assign(pizza, jsonPizza);
        pizzas.push(pizza);
      }

      this.pizzaCache = pizzas;
      return pizzas;
  }

  public addPizza(pizza: Pizza): Observable<void> {
    const obsAddPizza: Observable<void> = this.getJSON().map(p => {
      this.pizzaCache.push(pizza);
    });
    return obsAddPizza;
  }

  public getPizza(name: string): Observable<Pizza> {
    const pizzasObs: Observable<Pizza[]> =  this.getJSON();
    return pizzasObs.map(pizzas => pizzas.filter(pizza => pizza.name === name)[0]);
  }

  public deletePizza(pizzaToDelete: Pizza): Observable<boolean> {
    const pizzasObs: Observable<Pizza[]> =  this.getJSON();
    return pizzasObs.map(pizzas => {
      const index = pizzas.indexOf(pizzaToDelete, 0);
      if (index > -1) {
        pizzas.splice(index, 1);
        return true;
      } else {
        return false;
      }
    });

  }
}
