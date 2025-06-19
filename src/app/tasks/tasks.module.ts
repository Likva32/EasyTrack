import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

@NgModule({
  declarations: [TasksComponent, TaskComponent, AddTaskDialogComponent],
  imports: [DatePipe, CommonModule, FormsModule],
  exports: [TasksComponent],

})
export class TasksModule { }
