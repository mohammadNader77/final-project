import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  menuItems = [
    { name: 'Dashboard', imgSrc: 'dashboard.png', router: '/dashboard', disable:true },
    { name: 'Schedule', imgSrc: 'schedual.png', router: '/schedule', disable: true },
    { name: 'Team', imgSrc: 'team.png', router: '/team', disable: true },
    { name: 'Tasks', imgSrc: 'tasks.png', router: '/tasks', disable: false },
    { name: 'Log Book', imgSrc: 'log-book.png', router: '/log-book', disable: false },
    { name: 'Hiring', imgSrc: 'hiring.png', router: '/hiring', disable: false },
  ];

  reportItems = [
    { name: 'Time Clocking', imgSrc: 'time-clocking.png', disable: true },
    { name: 'Reports', imgSrc: 'reports.png' , disable: true},
    { name: 'Apps & Integrations', imgSrc: 'apps.png', disable: true },
    { name: 'Payroll', imgSrc: 'payroll.png', disable: true }
  ];


  activeItem = 'Home'; // Default active item, you can change this as needed

  setActiveItem(itemName: string) {
    this.activeItem = itemName;
  }
}
