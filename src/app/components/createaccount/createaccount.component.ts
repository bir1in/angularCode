import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  username: string = '';
  password1: string = '';
  password2: string = '';
  constructor(private us: UserService) { }

  ngOnInit() {
  }
/*
  createAccount(username:string, password1:string, password2:string){
    this.us.register(new User(0, this.username, this.password1)).subscribe(
      data => {
        console.log(data);
      },
      error => {

      }
    );
  }
  */
 createAccount(username: string, password1: string, password2: string, role: string){
  this.us.register(this.username, this.password1, this.password2).subscribe(
    data => {
      console.log(data);
    },
    error => {

    }
  );
}
}
