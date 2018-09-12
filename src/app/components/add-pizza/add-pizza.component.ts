import { Component, OnInit, Inject, Testability } from '@angular/core';
import { IPizzaService, MyServiceInjectionToken } from '../../services/ipizza.service';
import { Pizza } from '../../models/pizza';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  public pizza: Pizza = new Pizza();

  constructor(@Inject(MyServiceInjectionToken) private pizzaService: IPizzaService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.pizzaService.addPizza(this.pizza).subscribe(
      r => {
        this.router.navigate(['/carte-pizza']);
      },
      error => {
        console.error(error);
      });
  }

}
