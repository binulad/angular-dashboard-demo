import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../models/menu-constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // Variable for expand/collapse Sidebar
  isMenuExpand: boolean = false;
  // Array for menu list items
  menuList= MenuItems;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isMenuExpand = !this.isMenuExpand;
  }
}
