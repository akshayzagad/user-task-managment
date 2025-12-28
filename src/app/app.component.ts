import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-app';
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
