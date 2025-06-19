import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() complete: EventEmitter<string> = new EventEmitter<string>();  

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  onComplete(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
