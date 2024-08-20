import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../models/user";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() delete = new EventEmitter<User>();
  @Output() edit = new EventEmitter<User>();

  editTimeOff() {
    this.edit.emit(this.user);
  }

  deleteTimeOff() {
    this.delete.emit(this.user);
  }
}
