import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./models/user";
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  users: User[] = [];
  paginatedUsers: User[] = [];
  isLoading = true;
  isEditing = false;
  editingUser: User | null = null;
  currentPage = 1;
  itemsPerPage = 6;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getTimeOffs().subscribe((users: User[]) => {
      this.users = users;
      this.updatePaginatedUsers();
      this.isLoading = false;
    });
  }

  addTimeOff(): void {
    this.router.navigate(['/schedule/add-time-off']);
  }

  onSort() {
    this.users.sort((a, b) => a.employee.name.localeCompare(b.employee.name));
    this.updatePaginatedUsers();
  }

  onDelete(user: User) {
    this.users = this.users.filter(u => u !== user);
    this.checkPageOnDeletion();
    this.updatePaginatedUsers();
  }

  onEdit(user: User) {
    this.isEditing = true;
    this.editingUser = { ...user };
    this.router.navigate(['/schedule/add-time-off', user.employee.id]);
  }

  saveEdit(updatedUser: User) {
    if (this.editingUser) {
      const index = this.users.findIndex(u => u.employee.id === this.editingUser!.employee.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
        this.updatePaginatedUsers();
        this.isEditing = false;
        this.editingUser = null;
      }
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }

  checkPageOnDeletion(): void {
    const totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    if (this.currentPage > totalPages && totalPages > 0) {
      this.currentPage = totalPages;
    }
    this.updatePaginatedUsers();
  }

  onItemsPerPage(itemsPerPage: number): void {
    if (itemsPerPage > 0) {
      this.itemsPerPage = itemsPerPage;
      this.currentPage = 1;
      this.updatePaginatedUsers();
    }
  }
}

