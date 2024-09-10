import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDigitizingQuoteComponent } from './new_digitizing_quote/create-digitizing-quote.component';
import {  CreatePatchQuoteComponent } from './new_patch_quote/create-patch-quote.component';
import { CreateVendorQuoteComponent } from './new_vendor_quote/create-vendor-quote.component';
import { ViewQuoteComponent } from './view_quote/view-quote.component';








const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'create_digitizing_quote',
        component: CreateDigitizingQuoteComponent
      }, 

      {
        path: 'create_vendor_quote',
        component: CreateVendorQuoteComponent
        
      },

      {
        path: 'create_patch_quote',
        component: CreatePatchQuoteComponent
        
      },

      {
        path: 'view_quote',
        component: ViewQuoteComponent
        
      },

     

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
