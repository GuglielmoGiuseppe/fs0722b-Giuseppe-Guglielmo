import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/interface/post.interface';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-hide-post',
  templateUrl: './hide-post.component.html',
  styleUrls: ['./hide-post.component.scss']
})
export class HidePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
