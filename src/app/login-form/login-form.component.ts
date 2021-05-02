import { Component, OnInit } from '@angular/core';
import {LoginRequest} from '../model/login/login-request';
import {UserService} from '../service/user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginRequest: LoginRequest = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  loginUser(loginRequest) {
    console.log('loginRequest called');
    this.userService.loginUser(loginRequest)
      .subscribe(results => {
        console.log(results);
      });
  }

}
