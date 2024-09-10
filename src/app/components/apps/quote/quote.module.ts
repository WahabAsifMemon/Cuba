import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../shared/shared.module";
import { QuoteRoutingModule } from './quote-routing.module';

import { CreateDigitizingQuoteComponent } from './new_digitizing_quote/create-digitizing-quote.component';
import { CreateVendorQuoteComponent } from './new_vendor_quote/create-vendor-quote.component';
import {  CreatePatchQuoteComponent } from './new_patch_quote/create-patch-quote.component';
import { ViewQuoteComponent } from './view_quote/view-quote.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuoteRoutingModule
  ],
  declarations: [ CreateDigitizingQuoteComponent, CreateVendorQuoteComponent, CreatePatchQuoteComponent, ViewQuoteComponent   ]
})
export class QuoteModule { }
