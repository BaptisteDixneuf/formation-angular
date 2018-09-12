import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { IUserService } from './iuser.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from '../../../node_modules/rxjs/Subject';

@Injectable()
export class UserService implements IUserService {

  public message = new Subject<boolean>();

  constructor() { }

  seconnecter(user: User): boolean {
    let r: boolean;
    if (user.email === 'baptiste.dixneuf@gmail.com' && user.password === 'password' ) {
      this.message.next(true);
      r = true;
    } else {
      this.message.next(false);
      r = false;
    }
    return r;
  }

  public getSubject(): Subject<boolean> {
    return this.message;
  }

}
