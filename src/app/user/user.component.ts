import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from '../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { serviceUsers } from './users.service';

// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CardComponent, CommonModule, UsersComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  constructor(private userService: serviceUsers) {}

  // user = DUMMY_USERS;
    get users() {
    return this.userService.users;
  }

  /** create property to store id which is emit bu user component and it temprary initilize */
  selectedId?: string;

get selectedUser() {
  return this.selectedId
    ? this.userService.getUserById(this.selectedId)
    : null;
}

  onSelectUser(id: string) {
    // console.log(`Selected user with id` + id);
    this.selectedId = id;
  }
}
