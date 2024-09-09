import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../shared/shared.module";
import { ProjectRoutingModule } from './order-routing.module';

import { CreateDigitizingComponent } from './new_digitizing_order/create-digitizing.component';
import { CreateVendorComponent } from './new_vendor_order/create-vendor.component';
import { CreatePatchComponent } from './new_patch_order/create-patch.component';
import { ViewDigitizingComponent } from './view_digitizing_order/view-digitizing.component';
import { ViewPatchComponent } from './view_patch_order/view-patch.component';
import { ViewVendorComponent } from './view_vendor_order/view-vendor.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [ CreateDigitizingComponent, CreateVendorComponent, CreatePatchComponent, ViewPatchComponent, ViewVendorComponent,  ViewDigitizingComponent]
})
export class ProjectModule { }
