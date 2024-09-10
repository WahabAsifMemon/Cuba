import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDigitizingComponent } from './new_digitizing_order/create-digitizing.component';
import { CreateVendorComponent } from './new_vendor_order/create-vendor.component';
import { CreatePatchComponent } from './new_patch_order/create-patch.component';
import { ViewDigitizingComponent } from './view_digitizing_order/view-digitizing.component';
import { ViewPatchComponent } from './view_patch_order/view-patch.component';
import { ViewVendorComponent } from './view_vendor_order/view-vendor.component';






const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'create_digitizing_order',
        component: CreateDigitizingComponent
      }, 

      {
        path: 'create_vendor_order',
        component: CreateVendorComponent
        
      },

      {
        path: 'create_patch_order',
        component: CreatePatchComponent
        
      },

      {
        path: 'view_digitizing_order',
        component: ViewDigitizingComponent
        
      },

      {
        path: 'view_vendor_order',
        component: ViewVendorComponent
        
      },

      {
        path: 'view_patch_order',
        component: ViewPatchComponent
        
      },

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
