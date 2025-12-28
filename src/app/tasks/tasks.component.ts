import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) userId!: string;
  task = dummyTasks;

  get selectedTasks() {
    return this.task.filter(task => task.userId === this.userId)!;
  }

  onCompleteTask(id:string){
    this.task = this.task.filter((tasks)=> tasks.id !== id);
  }

  get imagePath() {
    return 'public/' + this.avatar;
  }
}
