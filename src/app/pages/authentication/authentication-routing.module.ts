import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSimpleComponent } from './login/simple/simple.component';
import { ValidationComponent } from './login/validation/validation.component';
import { ToolTipComponent } from './login/tool-tip/tool-tip.component';
import { SweetalertComponent } from './login/sweetalert/sweetalert.component';
import { RegisterSimpleComponent } from './register/simple/simple.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginSimpleComponent
  },
  {
    path: 'register',
    component: RegisterSimpleComponent
  },
  {
    path: 'unlock-user',
    component: UnlockUserComponent,
  },
  {
    path: 'forgot-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
