import {
  Component,
  computed,
  DestroyRef,
  inject,
  Input,
  input,
  OnInit,
} from '@angular/core';
import { serviceTask } from '../../tasks/tasks.service';
import { NewTaskComponent } from '../../tasks/new-task/new-task.component';
import { TaskComponent } from '../../tasks/task/task.component';
import { CommonModule } from '@angular/common';
import { serviceUsers } from '../users.service';
import { ActivatedRoute, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-users-tasks',
  imports: [NewTaskComponent, TaskComponent, CommonModule, RouterOutlet, RouterLinkWithHref],
  templateUrl: './users-tasks.component.html',
  styleUrl: './users-tasks.component.css',
})
export class UsersTasksComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;

  userName = '';

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  //userId = input.required<string>();  Here we use sinal for receive param

  isAddTaskClick = false;
  userId = '';
  /**
   *  private taskService = new serviceTask(); 
   * Here we use dependency injection 
     because when we create task service component to store all logic of tasks 
     component and here in class use its intance but when this service class 
     use in another component it also create its instance so that why we use dependency injection
     like below now we use only one intace of taskservice class
   * @param taskService 
   */

  constructor(
    private taskService: serviceTask,
    private userService: serviceUsers
  ) {}

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userId = paramMap.get('userId') ?? '';
        this.userName =
          this.userService.getUserById(this.userId)?.name ?? '';
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  get selectedTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  // userName = computed(() =>
  //   this.userService.users.find((u) => u.id === this.userId())?.name
  // );

  // get taskTitles() {
  //   return this.taskService
  //     .getUserTasks(this.userId())
  //     .map((task) => task.title);
  // }

  onClickAddTask() {
    this.isAddTaskClick = true;
  }

  onCloseAddTask() {
    this.isAddTaskClick = false;
  }
}
