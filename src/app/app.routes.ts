import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UsersTasksComponent } from './user/users-tasks/users-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path:'',
    component:NoTaskComponent
  },
  {
    path:'users/:userId',
    component:UsersTasksComponent,
    children:[{
      path:'tasks',
      component:TasksComponent
    },
  {
    path:'tasks/new',
    component:NewTaskComponent
  }]
  },
  
  //   {
  //   path: 'tasks',
  //   component: TasksComponent,
  // },
];
