import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { TasksState } from './state/task.state';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { PureTaskListComponent } from './components/pure-task-list/pure-task-list.component';
import { PureInboxScreenComponent } from './components/pure-inbox-scree.component';
import { InboxScreenComponent } from './components/inbox-screen.component';


@NgModule({
    imports: [CommonModule, NgxsModule.forFeature([TasksState])],
    exports: [TaskComponent, TaskListComponent],
    declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
    providers: [],
})
export class TaskModule { }