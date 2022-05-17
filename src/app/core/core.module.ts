import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableActionComponent } from './components/table-action/table-action.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    PageNotFoundComponent,
    TableActionComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, TopbarComponent, TableActionComponent, PageNotFoundComponent],
})
export class CoreModule {}
