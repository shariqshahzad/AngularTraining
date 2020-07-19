import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../components/user-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient : HttpClient) { }

  register(body : UserModel)
  {
    return this.httpClient.post('https://reqres.in/api/register',body);
  }
}
