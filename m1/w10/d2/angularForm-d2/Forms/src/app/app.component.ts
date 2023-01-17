import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forms';

  generi = ['uomo', 'donna'];
  form!: FormGroup;
  usernameProibiti = ["Mario", "anna"];

  constructor(private fb: FormBuilder){}

  validUsername = (formC: FormControl) =>{
    if(this.usernameProibiti.includes(formC.value)){
        return {"usernameProibito": true};
    }else{
        return null;
    }
  }

  ngOnInit(): void{
    this.form = this.fb.group({
        userInfo: this.fb.group({
            username: this.fb.control(null, [Validators.required, this.validUsername]),
            email: this.fb.control(null, [Validators.required, this.email])
        }),
        genere: this.fb.control("donna"),
        sport: this.fb.array([])
    });
    this.form.valueChanges.subscribe(value =>{
        console.log(value);
    })
  }

  getErrorsC(){

  }

  getFormC(name:string){
    return this.form.get(name)?.errors![error];
  }

  getSportsF(){
    return(this.form.get("sports") as FormArray).controls;
  }

  adSports(){
    const control = this.fb.control(null);
    (this.form.get("sports") as FormArray).push(control);
  }
}
