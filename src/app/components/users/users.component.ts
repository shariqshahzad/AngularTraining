import { Component, OnInit } from '@angular/core';
import * as users from '../../users/users.json';
import { UserModel } from '../user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserModel[] ;
  constructor(private router : Router) { }
  
  ngOnInit(): void {
    this.users = (users as any).default
  }

  onClickView(user : UserModel)
  {
    this.router.navigate(['user-profile',user.username,user.password,user.active]);
  }
  

}
