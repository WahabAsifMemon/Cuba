import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginSimpleComponent } from './login/simple/simple.component';
import { ValidationComponent } from './login/validation/validation.component';
import { ToolTipComponent } from './login/tool-tip/tool-tip.component';
import { SweetalertComponent } from './login/sweetalert/sweetalert.component';
import { RegisterSimpleComponent } from './register/simple/simple.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    LoginSimpleComponent,

    ValidationComponent,
    ToolTipComponent,
    SweetalertComponent,
    RegisterSimpleComponent,

    UnlockUserComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ]
})
export class AuthenticationModule { }
