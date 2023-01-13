import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../interface/todo.interface';
TodoService
@Component({
  selector: 'app-cell-list',
  templateUrl: './cell-list.component.html',
  styleUrls: ['./cell-list.component.scss']
})
export class CellListComponent implements OnInit {
    @Input('data') element!: Todo;
  constructor() { }

  ngOnInit(): void {
  }

}
