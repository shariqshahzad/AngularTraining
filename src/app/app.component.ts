import { Component } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngularProject';
  isLoggedIn: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (val.url.indexOf('login') > -1) {
          this.isLoggedIn = false;
        }
        else {
          this.isLoggedIn = true;
        }
      }
    });


  }

}
