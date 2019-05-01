import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/us.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  username:string = "";
  password1:string = "";
  password2:string = "";
  constructor(private us:UserService) { }

  ngOnInit() {
  }

  createAccount(username:string, password1:string, password2:string){
    this.us.createAccount(this.username, this.password1, this.password2).subscribe(
      data => {
        console.log(data);
      },
      error => {

      }
    );
  }
}
