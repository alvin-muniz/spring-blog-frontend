import { Injectable } from '@angular/core';
import { Message } from './model/message';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  BASE_URL="http://localhost:9092/auth/users/register";

  constructor(private http: HttpClient) {
  }

    executeHelloWorldService() {
      return this.http.get<Message>(this.BASE_URL);
    }
}
