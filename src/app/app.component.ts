import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import {
  NgForOf,
  NgIf,
} from '../../node_modules/@angular/common/common_module.d-NEF7UaHr';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TaskComponent,
    NgForOf,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-app';
  user = DUMMY_USERS;
  task = dummyTasks;

  /** create property to store id which is emit bu user component and it temprary initilize */
  selectedId?: string;

  get SelectedUser() {
    return this.user.find((user) => user.id === this.selectedId)!;
  }

  onSelectUser(id: string) {
    console.log(`Selected user with id` + id);
    this.selectedId = id;
  }
}
