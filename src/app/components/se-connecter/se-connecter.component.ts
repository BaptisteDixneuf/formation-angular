import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../models/user';
import { MyServiceUserInjectionToken, IUserService } from '../../services/iuser.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent implements OnInit {

  public userFormulaire: User = new User;


  constructor(@Inject(MyServiceUserInjectionToken) private userService: IUserService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.userFormulaire);
    const connected: boolean = this.userService.seconnecter(this.userFormulaire);
    if (connected) {
      localStorage.setItem('connected', 'true');
      this.router.navigate(['/add-pizza']);
    }
  }

}
