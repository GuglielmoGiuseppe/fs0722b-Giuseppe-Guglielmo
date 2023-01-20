import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interface/movies.interface';
import { MoviesService } from 'src/app/service/movies.service';
import { Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import database from '../../assets/db.json';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

//sub!:Subscription;
movies!: any | undefined;
img!: any;

private _jsonURL= "../../assets/db.json";
constructor(private http: HttpClient) {
  this.getJSON().subscribe(data => {
   this.movies = data.movies_popular;
   this.img = data.movies_popular[12].poster_path;
   console.log(data.movies_popular);
   console.log(this.img);
  });
}
public getJSON(): Observable<any> {
  return this.http.get(this._jsonURL);
}
ngOnInit() {
}

}
