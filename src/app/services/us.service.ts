import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(username:string, password:string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();

    body = body.set("username", username);
    body = body.set("password", password);
//edit this line when we have a login Servlet logic page
    return this.http.post("http://localhost:8080/Project2/Login", body, {headers: header});
  }

  createAccount(username:string, password1:string, password2:string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();

    body = body.set("username", username);
    body = body.set("password1", password1);
    body = body.set("password2", password2);

    console.log(username);
    console.log(password1);
    console.log(password2);
//edit this line when we have a create user Servlet logic page
     return this.http.post('http://localhost:8080/Project2/CreateAccount', body, {headers: header});
  }
}
