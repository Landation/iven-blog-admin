import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { TaskHomeComponent } from './task-home/task-home.component';
const routers: Routes = [
    {
        path: 'task', component: TaskHomeComponent
    },
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routers)],
    exports: [RouterModule],
})
export class TaskRoutingModule { }