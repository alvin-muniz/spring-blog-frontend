import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user/user.service';
import {User} from '../model/user/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userService: UserService) { }
  // Empty object to bind to ensure functionality is working
  user: User = {
    id: 1,
    username: 'Alvin',
    password: '123456',
    enabled: true
  };

  ngOnInit(): void {
  //  this.userService.registerNewUser();
  }

}
