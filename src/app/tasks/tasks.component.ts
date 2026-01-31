import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type addTaskData } from './task/task.modal';
import { serviceTask } from './tasks.service';
import { ActivatedRoute } from '@angular/router';
import { serviceUsers } from '../user/users.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) userId!: string;

   userTasks: any[] = [];

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

    constructor(private taskService: serviceTask) {}

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userId = paramMap.get('userId') ?? '';
        this.userTasks = this.taskService.getUserTasks(this.userId);
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

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



  get selectedTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

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
