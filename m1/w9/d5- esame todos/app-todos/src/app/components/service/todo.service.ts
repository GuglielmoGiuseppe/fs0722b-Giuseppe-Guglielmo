import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { CompletatiComponent } from '../completati/completati.component';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor() { }

    check(valueKey: string, contaier:Todo[]) {
        if (localStorage.getItem('lister'), valueKey) {
            var _list: any = localStorage.getItem('lister')!;
            contaier = JSON.parse(_list);
        }
        return contaier
    }

    GetPar(){
        var _list: any = localStorage.getItem('lister')!;
        return JSON.parse(_list)
    }

    Destroy(element:any)
    {
      console.log(element);
      element.remove()
    }
}
