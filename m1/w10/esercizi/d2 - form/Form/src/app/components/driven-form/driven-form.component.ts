import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-driven-form',
    templateUrl: './driven-form.component.html',
    styleUrls: ['./driven-form.component.scss'],
})
export class DrivenFormComponent implements OnInit {
    title = 'driven-form';
    stampa: boolean = false;
    controlloLunghezzaMinima:boolean=false;
    controlloLunghezzaMassima:boolean=false;

    @ViewChild('form', { static: true }) form!: NgForm;
    userForm = {
        defUserName: '',
        alterEgo: '',
        power: '',
        nemico: '',
        pianeta: '',
        debolezza: '',
        // controlloLunghezzaMinima: 5,
        // controlloLunghezzaMassima: 10
    };



    user: any = {
        name: '',
        alterEgo: '',
        power: '',
        nemico: '',
        pianeta: '',
        debolezza: '',
    };

    lunghezzaNemico: [] = [];
    lunghezzaPianeta: [] = [];

    //userName: new FormControl('', Validators.minLength(5))

    ngOnInit(): void {
        this.form.statusChanges?.subscribe((status) => {
            console.log('Stato del form: ', status);
        });
    }

    submit() {
        console.log('Form inviato: ', this.form);
        //this.stampa = true;
        this.user.name = this.form.value.userInfo.name;
        this.user.alterEgo = this.form.value.userInfo.alterEgo;
        this.user.power = this.form.value.userInfo.power;
        this.user.nemico = this.form.value.userInfo.nemico;
        this.user.pianeta = this.form.value.userInfo.pianeta;
        this.user.debolezza = this.form.value.userInfo.debolezza;

        this.form.reset();
    }
}