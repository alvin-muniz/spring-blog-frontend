import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../../model/message';
import {User} from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://localhost:9092/auth/users/register';

  user: User = {
    id: 1,
    name: 'Alvin',
    password: '123456',
    enabled: true
  };

  constructor(private http: HttpClient) {
  }

  registerNewUser() {
    this.http.post<User>(this.BASE_URL, this.user)
      .subscribe(results => {
        console.log(results.password);
        console.log(results.name);
      });
  }

  executeHelloWorldService() {
    return this.http.get<Message>(this.BASE_URL);
  }
}
