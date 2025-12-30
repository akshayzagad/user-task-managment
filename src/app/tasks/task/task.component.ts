import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Tasks } from './task.modal';
import { CardComponent } from "../../shared/card/card.component";
import { serviceTask } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Tasks;
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(serviceTask)

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id)
  }

}
