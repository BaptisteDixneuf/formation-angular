import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';



import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { SeConnecterComponent } from './components/se-connecter/se-connecter.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { RouterModule, Route } from '@angular/router';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import 'hammerjs';
import { ColorService } from './services/color.service';
import { CartePizzaComponent } from './components/carte-pizza/carte-pizza.component';
import { PizzaService } from './services/pizza.service';
import { MyServiceInjectionToken } from './services/ipizza.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AddPizzaComponent } from './components/add-pizza/add-pizza.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { UserService } from './services/user.service';
import { MyServiceUserInjectionToken } from './services/iuser.service';
import { AuthGuard } from './auth/auth';
import { HttpModule } from '@angular/http';
import { AppIsConnectedDirective } from './directives/app-is-connected.directive';


registerLocaleData(localeFr);




const routes: Route[] = [
  {  path: 'accueil', component: AccueilComponent},
  {  path: 'contact', component: ContactComponent},
  {  path: 'se-connecter', component: SeConnecterComponent},
  {  path: 'inscription', component: InscriptionComponent},
  {  path: 'color-picker', component: ColorPickerComponent},
  {  path: 'carte-pizza', component: CartePizzaComponent},
  {  path: 'add-pizza', component: AddPizzaComponent, canActivate: [AuthGuard]},
  {  path: 'pizza/:name', component: PizzaDetailComponent}
];

@NgModule({
 declarations: [
    AppComponent,
    RegistrationFormComponent,
    MenuComponent,
    AccueilComponent,
    ContactComponent,
    SeConnecterComponent,
    InscriptionComponent,
    ColorPickerComponent,
    CartePizzaComponent,
    AddPizzaComponent,
    PizzaDetailComponent,
    AppIsConnectedDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ColorService,
    AuthGuard,
    { provide: MyServiceInjectionToken, useClass: PizzaService },
    { provide: MyServiceUserInjectionToken, useClass: UserService },
    { provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
