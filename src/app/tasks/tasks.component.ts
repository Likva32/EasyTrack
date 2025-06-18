import { Component, Input, OnInit } from '@angular/core';
import { dummyTasks } from 'src/assets/dummy-tasks';
import { NewTaskData, Task } from './task/task.model';
import { User } from '../user/user.model';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [TaskComponent, AddTaskDialogComponent, NgIf, NgFor],
})
export class TasksComponent implements OnInit {
  @Input() selectedUser: User;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {
   }

  ngOnInit(): void {
  }

  get tasksToShow(): Task[] {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  onStartAddingTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddingTask(): void {
    this.isAddingTask = false;
  }
}
