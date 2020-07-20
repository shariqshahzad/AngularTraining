import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  
  heading : string ;

  ngOnInit(): void {
    if (this.router.url.includes('dashboard'))
      this.heading = "Dashboard";
    if (this.router.url.includes('users'))
      this.heading = "Users";
  }

}
