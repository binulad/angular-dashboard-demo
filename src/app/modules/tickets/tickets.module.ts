import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';


@NgModule({
  declarations: [
    TicketsComponent,
    TicketInfoComponent,
    TicketListComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
  ]
})
export class TicketsModule { }
