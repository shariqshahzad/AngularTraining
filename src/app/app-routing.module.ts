import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes =
  [
    {
      path: '' , pathMatch : 'full', redirectTo : 'login'
    },
    {
      path: 'dashboard', component: DashboardComponent
    },
    {
      path : 'login' , component : LoginComponent
    },
    {
      path : 'user-profile/:username/:password/:active' , component : UserProfileComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
