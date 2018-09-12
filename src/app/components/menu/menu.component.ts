import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  /*public doSomething(): number {
    return 0;
  }

  public redirectTo(pageMenu: PageMenu): void {
    switch(pageMenu)
  }*/

}

/*enum PageMenu {
  Accueil = 0,
  Contact = 1,
  Inscription = 2,
  SeConnecter = 3
}*/
