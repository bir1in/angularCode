import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/us.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String = "";
  password:String = "";
  title = 'StarWars Tradeport';
  constructor(private us:UserService) { }

  ngOnInit() {
  }

  submitUser(username:string, password:string){
    this.us.getUser(username, password).subscribe(
      data => {

      },
      error => {
        console.log("These aren't the droids you're looking for.");
      }
    )
  }
}
