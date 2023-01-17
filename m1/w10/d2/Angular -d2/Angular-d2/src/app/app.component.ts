import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Directive, Input, ViewChild} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-d2';

  @ViewChild('form', {static: true}) form!: NgForm;

  userForm={
    defUserName: '',
    email: '',
    question: ''
  }

  generi = [
  {
    label: 'uomo',
    value: 'donna'
  },
  {
    label: 'uomo',
    value: 'donna'
  }
  ]

  risposta = '';

  user: any = {
    username: '',
    email: '',
    secret: '',
    sesso: '',
    risposta: '',
  }

  ngOnInit(): void{
    this.form.statusChanges?.subscribe(status =>{
      console.log("status del form", status)
    })
  }

  generateUserName(){
    this.form.form.patchValue({
      userInfo:{
        email:'pippi@live.it',
        username: 'pippo',
      }
    })
  }

  submit(){
    this.user.username = this.form.value.userInfo.username;
    this.user.email = this.form.value.userInfo.email;
    this.user.secret = this.form.value.userInfo.secret;
    this.user.sesso = this.form.value.userInfo.sesso;
    this.user.risposta = this.form.value.userInfo.risposta;
  }

}
