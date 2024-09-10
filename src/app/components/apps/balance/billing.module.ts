import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../shared/shared.module";
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BillingRoutingModule
  ],
  declarations: [ BillingComponent   ]
})
export class BillingModule { }
