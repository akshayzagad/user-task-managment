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
import { CardComponent } from "../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CardComponent, CommonModule, UsersComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
 

  user = DUMMY_USERS;

  /** create property to store id which is emit bu user component and it temprary initilize */
  selectedId?: string;

  get SelectedUser() {
    return this.user.find((user) => user.id === this.selectedId)!;
  }

  onSelectUser(id: string) {
    // console.log(`Selected user with id` + id);
    this.selectedId = id;
  }
}
