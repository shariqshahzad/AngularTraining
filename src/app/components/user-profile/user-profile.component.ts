import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../user-model';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user : UserModel = new UserModel();
  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.user.username = this.activatedRoute.snapshot.paramMap.get('username');
    this.user.password = this.activatedRoute.snapshot.paramMap.get('password');
    this.user.active = Boolean(this.activatedRoute.snapshot.paramMap.get('active'));
  }

}
