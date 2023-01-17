import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  name!: string;

  constructor(private userSrv: UsersService) { }

  ngOnInit(): void {
  }

  onNewUser(name: string){
    this.userSrv.CreateUser(name)
  }

}
