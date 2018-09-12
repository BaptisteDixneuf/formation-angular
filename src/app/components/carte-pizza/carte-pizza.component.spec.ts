import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePizzaComponent } from './carte-pizza.component';

describe('CartePizzaComponent', () => {
  let component: CartePizzaComponent;
  let fixture: ComponentFixture<CartePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
