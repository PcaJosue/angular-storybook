import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { ArchiveTask, PinTask, TasksState } from 'src/app/state/task.state';

@Component({
  selector: 'app-task-list',
  template: `
    <app-pure-task-list
      [tasks]="tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
  `,
})
export class TaskListComponent {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;

  constructor(private store: Store) { }

  /**
   * Método de componente para activar el evento archiveTask
   */
  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Método de componente para activar el evento pinTask
   */
  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}