import { Component, OnInit, Inject, Testability } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { IPizzaService, MyServiceInjectionToken } from '../../services/ipizza.service';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-carte-pizza',
  templateUrl: './carte-pizza.component.html',
  styleUrls: ['./carte-pizza.component.css']
})
export class CartePizzaComponent implements OnInit {

  public pizzas: Pizza[] = [];
  constructor(@Inject(MyServiceInjectionToken) private pizzaService: IPizzaService ) { }

  ngOnInit() {

    this.pizzaService.getJSON().subscribe(pizzas => {
      this.pizzas = pizzas;
    });

  }

  valuechange(event: any, pizza: Pizza) {
    console.log('Suppresion');
    console.log(pizza);
    this.pizzaService.deletePizza(pizza).subscribe(boolean => {
      this.pizzaService.getJSON().subscribe(pizzas => {
        this.pizzas = pizzas;
      });
    });
  }

}
