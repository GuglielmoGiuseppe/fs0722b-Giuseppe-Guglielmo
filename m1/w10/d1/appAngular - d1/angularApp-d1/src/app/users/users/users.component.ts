import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    sub!: Subscription; //oggetto che sottoscriverà l'observable
    conteggio: number = 0;
  constructor() { }

  ngOnInit(): void {
    const intervallo = new Observable(observer =>{
        let count = 0;
        setInterval(()=>{
            observer.next(count)
            if(count === 5){
                observer.complete();
                console.log("completato");
            }
            if(count >3)
            {
                observer.error(new Error("troppo grande"))
            }
            count++
        }, 1000);
    });

  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
