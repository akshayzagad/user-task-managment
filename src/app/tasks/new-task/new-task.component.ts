import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { serviceTask } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone:false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input ({required: true}) userId!: string;
  @Output() close = new EventEmitter();
  // @Output() add = new EventEmitter<addTaskData>();

  title = '';
  summary = '';
  date = '';

  private tasksService = inject(serviceTask)

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    // this.add.emit({
    //   title: this.title,
    //   summary: this.summary,
    //   date: this.date,
    // });
    this.tasksService.addTask({
       title: this.title,
      summary: this.summary,
      date: this.date,
    },this.userId);
    this.close.emit();
  }
}
