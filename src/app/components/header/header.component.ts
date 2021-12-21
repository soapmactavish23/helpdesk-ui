import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  items: MenuItem[];

  constructor() {
    this.items = [
    ];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Help Desk',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
          },
          {
            label: 'New User',
            icon: 'pi pi-fw pi-plus'
          },
        ]
      },
      {
        label: 'Ticket',
        icon: 'pi pi-fw pi-ticket',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
          },
          {
            label: 'New Ticket',
            icon: 'pi pi-fw pi-plus'
          },
        ]
      },
      {
        label: 'Summary',
        icon: 'pi pi-fw pi-search',
        items: [
          {
            label: 'To View',
            icon: 'pi pi-fw pi-eye',
          },
        ]
      },
    ];
  }
}
