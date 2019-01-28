import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { PermissionGuard } from '../guards/permission.guard';
import { FocusGuard } from '../guards/focus.guard';
import { GuidResolve } from '../guards/guid.resolve';
import { EditorComponent } from './editor/editor.component';
import { TaskHomeComponent } from '../task/task-home/task-home.component';


const routers: Routes = [
    {
        path: 'home', component: HomeComponent, canActivate: [PermissionGuard], children: [
            { path: 'guide', component: GuideComponent, canDeactivate: [FocusGuard], },
            { path: 'editor', component: EditorComponent, data: { keep: true } },
            { path: 'task', component: TaskHomeComponent },
        ]
    },
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routers)],
    exports: [RouterModule],
    providers: [PermissionGuard, FocusGuard, GuidResolve]
})
export class ProjectsRoutingModule { }