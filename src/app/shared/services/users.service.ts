import { inject, Injectable } from '@angular/core';
import { Users } from '../types/users';
import { UtilsService } from '../utils/utils.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Users[] = [];
  utilsService = inject(UtilsService)

  constructor() { }


  addUser(user: Users): void {
    this.users = [...this.users, user]
  }

  removeUser(userId: string): void {
    const updatedUsers = this.users.filter((user) => userId !== user.id);
    this.users = updatedUsers
  }

  getUserNames(): string[] {
    return this.utilsService.pluck(this.users, 'name')
  }
}
