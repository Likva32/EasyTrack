import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() userId: string;
  enteredTitle: string;
  enteredSummary: string;
  enteredDate: string;

  private tasksService = inject(TasksService);

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.enteredTitle && this.enteredSummary && this.enteredDate) {
      this.tasksService.AddTask(
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          date: this.enteredDate
        },
        this.userId
      );

      this.enteredTitle = '';
      this.enteredSummary = '';
      this.enteredDate = null;

      this.close.emit();
    }
  }

}
