import { Injectable } from '@angular/core';

//import { Response } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ClientMessage } from '../models/client-message.model';
import { USER_URL } from '../../environments/environment';
//import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  private people = [];

  baseUrl: string = 'https://swapi.co/api/';

  public register2(user: User): Observable<ClientMessage> {
    return this.http
            .post(`${USER_URL}register`, user)
            .catch(this.handleError);
  }
/*
  public findUser(user: User): Observable<User> {

    let header = new HttpHeaders().set('Content-Type', 'application-x-www-form-urlencoded');
    let body = new HttpParams().set('username', user.username).set('password', user.password);

    return Observable.of(this.http
            .post(`${USER_URL}find`, body, {headers: header}));
  }

  public findAllUsers(): Observable<User[]> {
    return this.http
            .get(`${USER_URL}all`)
            .catch(this.handleError);
  }
*/
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
  register(username: string, password1: string, password2: string){
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let body = new HttpParams();

    body = body.set('username', username);
    body = body.set('password1', password1);
    body = body.set('password2', password2);

    console.log(username);
    console.log(password1);
    console.log(password2);

    return this.http.post('http://localhost:8081/Project_2/users/register', body, {headers: header});
  }
  find(username: string, password: string){
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let body = new HttpParams();

    body = body.set('username', username);
    body = body.set('password1', password);

    console.log(username);
    console.log(password);

    return this.http.post('http://localhost:8081/Project_2/users/find', body, {headers: header});
  }
  get_people() {
    return this.http.get(this.baseUrl + 'people');
    /*this.http.get(this.baseUrl + '/people').subscribe((res: any[])=>{
      console.log(res);
      this.passengers = res;
    })*/
  }
  get_planets() {
    return this.http.get(this.baseUrl + 'planets');
  }
  get_starships() {
    return this.http.get(this.baseUrl + 'starships');
  }
}
