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

  formUser: User = {
    id: null,
    username: '',
    password: '',
    enabled: true
  };

  ngOnInit(): void {
  //  this.userService.registerNewUser();
  }

  registerUser(formUser){
    console.log('user registered!');
    this.userService.registerNewUser(formUser)
      .subscribe(results => {
        console.log(results.password);
        console.log(results.username);
        console.log(results);
      });
    this.clearUser();
  }

  clearUser() {
    this.formUser.username = '';
    this.formUser.password = '';
  }

}
