import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  }
  login: any ={
    userName: '',
    password: '',
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers')
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

onSignUp(){
  this.signupUsers.push(this.signupObj)
  localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
  this.signupObj = {
    userName: '',
    email: '',
    password: '',
  }
}

onLogin(){
  const isUserExist = this.signupUsers.find(m => m.userName == this.login.userName && m.password == this.login.password);
  if(isUserExist != undefined)
  {
    this.router.navigate(['/popular']);
    console.log("login success")
  }else{
    console.log("login sbagliato")
  }
}
}
