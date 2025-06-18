import { Component, Input, OnInit } from '@angular/core';
import { dummyTasks } from 'src/assets/dummy-tasks';
import { NewTaskData, Task } from './task/task.model';
import { User } from '../user/user.model';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = dummyTasks;
  @Input() selectedUser: User;
  isAddingTask: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get tasksToShow(): Task[] {
    return this.tasks.filter(task => task.userId === this.selectedUser.id);
  }
  
  onComplete(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddingTask(): void {
    this.isAddingTask = true;
  }

  onCancelAddingTask(): void {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData): void {
   this.tasks.unshift({
      id: Math.random().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.selectedUser.id
    });
    
    this.isAddingTask = false;
  }
  
}
