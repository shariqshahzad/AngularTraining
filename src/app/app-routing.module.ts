import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes =
  [
    {
      path: '' , pathMatch : 'full', redirectTo : 'login'
    },
    {
      path: 'dashboard', component: DashboardComponent
    },
    {
      path: 'users', component: UsersComponent
    },
    {
      path : 'login' , component : LoginComponent
    },
    {
      path : 'user-profile/:username/:password/:active' , component : UserProfileComponent
    },
    {
      path : 'register' , component : RegisterComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
