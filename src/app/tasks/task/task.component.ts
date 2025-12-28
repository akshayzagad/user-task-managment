import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Tasks } from './task.modal';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Tasks;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
