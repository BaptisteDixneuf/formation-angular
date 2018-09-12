import { TestBed, inject } from '@angular/core/testing';

import { PizzaService } from './pizza.service';
import { Http } from '@angular/http';

describe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaService, Http]
    });
  });

  it('should be created', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
