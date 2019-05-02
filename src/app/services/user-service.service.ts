import { Injectable } from '@angular/core';

//import { Response } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ClientMessage } from '../models/client-message.model';
import { USER_URL } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<ClientMessage> {
    return this.http
            .post(`${USER_URL}register`, user)
            .catch(this.handleError);
  }

  public findUser(user: User): Observable<User> {
    return this.http
            .post(`${USER_URL}findUser`, user)
            .catch(this.handleError);
  }

  public findAllUsers(): Observable<User[]> {
    return this.http
            .get(`${USER_URL}findAllUsers`)
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
