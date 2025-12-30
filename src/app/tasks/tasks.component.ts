import { Component, Input } from '@angular/core';
import { serviceTask } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone:false,
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
