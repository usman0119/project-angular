import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) { }

  // fungsi dari subscribe adalah metode yg pada tipe observeble di jenis 
  //utilitas secara sync atau async artinya. dimna subscribe ini adlah 
  // method yg digunakan observable mengalirkan data ke komponen yang telah 
  // di subscription yang dapat di amati

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.
      tasks = tasks));
  }

    deleteTask(task: Task) {
      this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter(t => t.id !== task.id)
        ));
    }

    toggleReminder(task: Task) {
      task.reminder = !task.reminder;
      this.taskService
      .updateTaskReminder(task)
      .subscribe()
    }

    addTask(task: Task) {
      this.taskService.addTask(task).subscribe((tasks) => (this.
        tasks.push(task)));
    }
}
