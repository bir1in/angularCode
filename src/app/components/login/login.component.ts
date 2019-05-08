import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  title = 'StarWars Tradeport';
  constructor(private us: UserService) { }

  ngOnInit() {
  }
/*
  login(username: string, password: string){
    this.us.findUser(new User(0, this.username, this.password)).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('These aren\'t the droids you\'re looking for.');
      }
    );
  }
  */
 login(username: string, password: string){
  this.us.find(this.username, this.password).subscribe(
    data => {

    },
    error => {
      console.log('These aren\'t the droids you\'re looking for.');
    }
  )
}
}
