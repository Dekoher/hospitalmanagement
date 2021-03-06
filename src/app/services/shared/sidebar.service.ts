import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      title: 'Main Menu',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Dashboard',
          url: '/dashboard',
        },
        {
          title: 'ProgressBar',
          url: '/progress',
        },
        {
          title: 'Graph',
          url: '/graphs1',
        },
        {
          title: 'Promises',
          url: '/promises',
        },
      ],
    },
  ];
  constructor() {}
}
