import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {User} from "./models/user";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  users: User[] = [];


  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // this.userService.users$.subscribe((users: User[]) => {
    //   this.users = users;
    // });
    this.users = this.userService.getUsers();
  }

  addTimeOff(): void {
    this.router.navigate(['/schedule/add-time-off']);
  }
  onSort(){
    this.users.sort((a, b) => a.name.localeCompare(b.name));
  }
}
