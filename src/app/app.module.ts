import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { HeaderComponent } from './header/header.component';
import { AddTaskDialogComponent } from './tasks/add-task-dialog/add-task-dialog.component';
import { CardComponent } from './shared/card/card.component';
import { TasksModule } from './tasks/tasks.module';
import { CardModule } from './shared/card/card.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TasksModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
