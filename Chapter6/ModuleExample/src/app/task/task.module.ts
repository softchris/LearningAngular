import { TaskDetailComponent } from './task.detail.component';
import { TaskDetailsComponent } from './task.details.component';
import { TaskComponent } from './task.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [TaskComponent, TaskDetailsComponent],
  exports: [TaskComponent, TaskDetailComponent]
})
export class TaskModule { }


