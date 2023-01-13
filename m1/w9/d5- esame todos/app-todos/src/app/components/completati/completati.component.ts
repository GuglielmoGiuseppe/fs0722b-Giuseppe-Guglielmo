import { Component, OnInit } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { Todo } from '../interface/todo.interface';
import { TodoService } from '../service/todo.service';
TodoService
@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

    posts!:Todo[];
    post2: Todo[] = this.todos.GetPar();
  constructor(private todos:TodoService) { }

  ngOnInit(): void {
    this.todos.check("lister",this.posts)
    console.log(this.post2);
  }

  DestroyElement(value:any){
    this.todos.Destroy(value);
  }
}
