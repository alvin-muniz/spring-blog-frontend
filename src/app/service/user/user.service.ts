import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../../model/message';
import {User} from '../../model/user/user';
import {LoginRequest} from '../../model/login/login-request';

// replace with config value at some point
const API_ENDPOINT = 'http://localhost:9092/auth/users/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Reintegrate after form complete
  // user: User = {
  //   id: 1,
  //   username: 'Alvin',
  //   password: '123456',
  //   enabled: true
  // };

  constructor(private http: HttpClient) {
  }

  registerNewUser(user: User) {
    return this.http.post<User>(API_ENDPOINT + 'register', user);
  }

  loginUser(loginRequest: LoginRequest) {
    console.log('loginRequest service initiated');
    return this.http.post<any>(API_ENDPOINT + 'login', loginRequest);
  }

  executeHelloWorldService() {
    return this.http.get<Message>(API_ENDPOINT);
  }
}
