import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from "./dummy-tasks"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  user = DUMMY_USERS;
  task = dummyTasks;

  /** create property to store id which is emit bu user component and it temprary initilize */
  selectedId = "u1";

  get SelectedUser(){
    return this.user.find((user)=>user.id === this.selectedId)!;
  }

  onSelectUser(id:string){
    console.log(`Selected user with id` + id);
    this.selectedId = id;
  }
}
