import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketInfoComponent,
    TicketListComponent,
    TicketFormComponent,
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TicketsModule {}
