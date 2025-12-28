import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { type addTaskData } from '../task/task.modal';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<addTaskData>();

  title = '';
  summary = '';
  date = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.date,
    });
  }
}
