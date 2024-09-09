import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../shared/shared.module";
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { ViewTicketComponent } from './view_ticket/view_ticket.component';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TicketRoutingModule
  ],
  declarations: [ TicketComponent, ViewTicketComponent  ]
})
export class TicketModule { }
