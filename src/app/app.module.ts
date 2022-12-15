import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commponents/header/header.component';
import { ButtonComponent } from './commponents/button/button.component';
import { TasksComponent } from './commponents/tasks/tasks.component';
import { TaskItemComponent } from './commponents/task-item/task-item.component';
import { AddTaskComponent } from './commponents/add-task/add-task.component';
import { AboutComponent } from './commponents/about/about.component';


const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
