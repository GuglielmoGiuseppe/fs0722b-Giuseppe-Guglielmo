import { Title } from '@angular/platform-browser';
import { Todo } from '../interface/todo.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompletatiComponent } from '../completati/completati.component';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']

})

export class TodosComponent implements OnInit {

    list: Todo[] = [];
    NewTodo!:string;
  constructor(private tds: TodoService) { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  ngOnInit(): void {

  }

  AddToComplete(value?:any){
    this.saveData("lister",JSON.stringify(this.list));
    if(value)
        this.DestroyElement(value)
  }

  DestroyElement(value:any){
    this.tds.Destroy(value);
  }

  AddToList(value:any, element:any){
    if(value)
    {
        var td = <Todo>{};
        td.id = 1;
        td.title = value;
        td.completed = true;
        element.value = "";
        this.list.push(td);
    }
    else{
        console.log("inserici un parametro");
    }

  }

}
