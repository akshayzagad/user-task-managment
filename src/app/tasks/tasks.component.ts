import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type addTaskData } from './task/task.modal';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) userId!: string;

  task = dummyTasks;

  isAddTaskClick = false;

  get selectedTasks() {
    return this.task.filter((task) => task.userId === this.userId)!;
  }

  onCompleteTask(id: string) {
    this.task = this.task.filter((tasks) => tasks.id !== id);
  }

  onSubmitTask(taskData: addTaskData) {
    this.task.push(
     { id:new Date().getTime().toString(),
      userId:this.userId,
      title:taskData.title,
      dueDate:taskData.date,
      summary:taskData.summary}
    )
    this.isAddTaskClick = false;
  }

  onClickAddask() {
    this.isAddTaskClick = true;
  }

  onCloseAddask() {
    this.isAddTaskClick = false;
  }

  get imagePath() {
    return 'public/' + this.avatar;
  }
}
