import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedUsers: any[] = [];

  ngOnInit(): void {

  }

  setSelectedUsers(event) {
    if (event.action)
      this.selectedUsers.push(event.data);
    else {
      var index = this.selectedUsers.indexOf(event.data);
      this.selectedUsers.splice(index, 1);

    }

  }

}
