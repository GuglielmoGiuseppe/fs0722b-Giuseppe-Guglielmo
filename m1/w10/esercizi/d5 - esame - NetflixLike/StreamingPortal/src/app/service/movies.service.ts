import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../interface/movies.interface';
import { catchError, map, tap} from 'rxjs';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  get(){
    return fetch('http://localhost:4200/assets/db.json').then(r => r.json).then(j => { console.log(j); });
    //return this.http.get<{movie: Movies[]}>('http://localhost:4200/assets/db.json').pipe(map(ris => ris.movie));
  }
}
