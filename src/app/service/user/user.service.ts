import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../../model/message';
import {User} from '../../model/user/user';

// replace with config value at some point
const API_ENDPOINT = 'http://localhost:9092/auth/users/register';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Reintegrate after form complete
  user: User = {
    id: 1,
    username: 'Alvin',
    password: '123456',
    enabled: true
  };

  constructor(private http: HttpClient) {
  }

  registerNewUser() {
    this.http.post<User>(API_ENDPOINT, this.user)
      .subscribe(results => {
        console.log(results.password);
        console.log(results.username);
      });
  }

  executeHelloWorldService() {
    return this.http.get<Message>(API_ENDPOINT);
  }
}
