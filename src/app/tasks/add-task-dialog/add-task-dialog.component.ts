import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  enteredTitle: string;
  enteredSummary: string;
  enteredDate: string;

  @Output() addTask: EventEmitter<NewTaskData> = 
  new EventEmitter<NewTaskData>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    if (this.enteredTitle && this.enteredSummary && this.enteredDate) {
      this.addTask.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      });
      this.enteredTitle = '';
      this.enteredSummary = '';
      this.enteredDate = null;
    }
  }
}
