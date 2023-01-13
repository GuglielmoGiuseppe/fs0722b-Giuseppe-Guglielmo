import { Component } from '@angular/core';
import { Todo } from './components/interface/todo.interface';
import { TodoService } from './components/service/todo.service';
import { TodosComponent } from './components/todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    lists: Todo[] = [];

    AddToListTo(todo: Todo){
        this.lists.push(todo)
        console.log(this.lists)
    }
}
