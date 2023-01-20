import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  MyUser: any[] = [];

  ngOnInit(): void {
    var list = localStorage.getItem('signUpUsers');
    this.MyUser = JSON.parse(list!);
    console.log(list);
  }

}
