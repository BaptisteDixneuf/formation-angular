import { Component, OnInit, Inject } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../models/pizza';
import { IPizzaService, MyServiceInjectionToken } from '../../services/ipizza.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  public pizza: Pizza;
  constructor(private route: ActivatedRoute,
    @Inject(MyServiceInjectionToken) private pizzaService: IPizzaService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPizza();
  }

  getPizza(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.pizzaService.getPizza(name).subscribe(
      pizza => {
        this.pizza = pizza;
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
