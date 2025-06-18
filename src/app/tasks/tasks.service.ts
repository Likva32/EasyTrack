import { dummyTasks } from "src/assets/dummy-tasks";
import { NewTaskData, Task } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks: Task[] = dummyTasks;

    getUserTasks(userId: string): Task[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    AddTask(taskData: NewTaskData, userId: string): void {
       this.tasks.unshift({
          id: Math.random().toString(),
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date,
          userId: userId
        });
    }

    removeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}