import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';
import { TaskNewComponent } from './task-new/task-new.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [TaskHomeComponent, TaskItemComponent, TaskHeaderComponent, TaskListComponent, TaskNewComponent]
})
export class TaskModule { }
