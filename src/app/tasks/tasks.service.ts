import { dummyTasks } from "src/assets/dummy-tasks";
import { NewTaskData, Task } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks: Task[] = dummyTasks;

    constructor() {
      const tasks = localStorage.getItem('tasks');

      if (tasks) {
          this.tasks = JSON.parse(tasks);
      } else {
          this.saveTasks();
      }
    }

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
      this.saveTasks();
    }

    removeTask(id: string): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.saveTasks();
    }

    private saveTasks(): void {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}