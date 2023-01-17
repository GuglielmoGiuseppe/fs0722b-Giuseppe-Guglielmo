import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormArray,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
    title = 'formDirettive';
    stampa: boolean = false;

    generi = ['uomo', 'donna'];
    form!: FormGroup;
    usernameProibiti = ['Mario', 'Anna'];

    constructor(private fb: FormBuilder) {}

    validUsername = (formC: FormControl) => {
        if (this.usernameProibiti.includes(formC.value)) {
            return { 'usernameProibito': true };
        } else {
            return null;
        }
    };

    ngOnInit(): void {
        this.form = this.fb.group({
            userInfo: this.fb.group({
                username: this.fb.control(null, [
                    Validators.required,
                    this.validUsername,
                ]),
                email: this.fb.control(null, [
                    Validators.required,
                    Validators.email,
                ]),
            }),
            genere: this.fb.control(''),
            sports: this.fb.array(['']),
        });

        this.form.valueChanges.subscribe((value) => {
            console.log(value);
        });
    }

    getErrorC(name: string, error: string) {
        return this.form.get(name)?.errors![error];
    }

    getFormC(name: string) {
        return this.form.get(name);
    }

    getSportsF() {
        return (this.form.get('sports') as FormArray).controls;
    }

    addSports() {
        const control = this.fb.control(null);
        (this.form.get('sports') as FormArray).push(control);
        console.log(this.getSportsF());
    }

    submit() {
        this.stampa = true;
        console.log(this.form);
        console.log('Form correttamente inviato');
        this.getSportsF().length = 1;
        this.form.reset();
    }
}
