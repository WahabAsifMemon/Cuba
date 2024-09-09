import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },


  {
    path: 'order',
    loadChildren: () => import('../../components/apps/order/order.module').then(m => m.ProjectModule)
  },

  {
    path: 'quote',
    loadChildren: () => import('../../components/apps/quote/quote.module').then(m => m.QuoteModule)
  },

  {
    path: 'balance',
    loadChildren: () => import('../../components/apps/balance/billing.module').then(m => m.BillingModule)
  },

  {
    path: 'support',
    loadChildren: () => import('../../components/apps/support/ticket.module').then(m => m.TicketModule)
  },
];


