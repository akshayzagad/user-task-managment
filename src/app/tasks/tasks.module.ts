import { NgModule } from '@angular/core';
import {
  CommonModule,
  DatePipe,
} from '@angular/common'; /** Common Module use instead 
datePipe like features */
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  exports: [TasksComponent],
  imports: [SharedModule, DatePipe, FormsModule, CommonModule],
})
export class TasksModule {}
