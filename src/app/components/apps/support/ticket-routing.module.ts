import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { ViewTicketComponent } from './view_ticket/view_ticket.component';











const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'create_ticket',
        component: TicketComponent
      }, 

      {
        path: 'view_ticket',
        component: ViewTicketComponent
      }, 

     

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
