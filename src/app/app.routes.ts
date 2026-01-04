import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UsersTasksComponent } from './user/users-tasks/users-tasks.component';

export const routes: Routes = [
  {
    path:'',
    component:NoTaskComponent
  },
  {
    path:'users/:userId',
    component:UsersTasksComponent
  }
  //   {
  //   path: 'tasks',
  //   component: TasksComponent,
  // },
];
