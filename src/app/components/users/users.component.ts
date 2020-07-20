import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as users from '../../users/users.json';
import { UserModel } from '../user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserModel[];
  @Output('onSelectUser') onSelectUser: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.users = (users as any).default
  }

  onClickView(user: UserModel) {
    this.router.navigate(['user-profile', user.username, user.password, user.active]);
  }

  onSelect(user, event) {
    console.log(event.target.checked)
    this.onSelectUser.emit({ data: user, action: event.target.checked });
  }

}
