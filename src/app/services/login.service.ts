import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../components/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {


  }

  login(user : UserModel) {
    return this.httpClient.post('https://reqres.in/api/login',user);
  }
}
