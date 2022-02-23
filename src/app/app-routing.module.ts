import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurds/auth.guard';
import { ForgotPasswordComponent } from './MyComponents/forgot-password/forgot-password.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { RegisterComponent } from './MyComponents/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},

  {path: 'admin',
  //  canActivate:[AuthGuard],
   loadChildren:()=>import('./Modules/admin/admin.module')
  .then((m)=> m.AdminModule),
  },

  {path: 'user', loadChildren:()=>import('./Modules/user/user.module')
  .then((m)=> m.UserModule),
  },
  
  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }