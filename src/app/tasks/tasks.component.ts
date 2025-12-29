import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type addTaskData } from './task/task.modal';
import { serviceTask } from './tasks.service';

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



  isAddTaskClick = false;

  /**
   *  private taskService = new serviceTask(); 
   * Here we use dependency injection 
     because when we create task service component to store all logic of tasks 
     component and here in class use its intance but when this service class 
     use in another component it also create its instance so that why we use dependency injection
     like below now we use only one intace of taskservice class
   * @param taskService 
   */

  constructor(private taskService: serviceTask) { }

  get selectedTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
   this.taskService.removeTask(id)
  }

  // onSubmitTask(taskData: addTaskData) {
  //   this.task.push({
  //     id: new Date().getTime().toString(),
  //     userId: this.userId,
  //     title: taskData.title,
  //     dueDate: taskData.date,
  //     summary: taskData.summary,
  //   });
  //   this.isAddTaskClick = false;
  // }

  onClickAddTask() {
    this.isAddTaskClick = true;
  }

  onCloseAddTask() {
    this.isAddTaskClick = false;
  }

  get imagePath() {
    return 'public/' + this.avatar;
  }
}
