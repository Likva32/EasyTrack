import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task/task.model';
import { User } from '../user/user.model';
import { TasksService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
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
