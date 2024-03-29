import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-eta',
    templateUrl: './eta.component.html',
    styleUrls: ['./eta.component.scss']
})
export class EtaComponent implements OnInit {

    @Input() eta!: number;
    @Output() etaChange = new EventEmitter<number>();

    constructor() { }

    add() {
        this.eta++;
        this.etaChange.emit(this.eta);
    }

    sott() {
        this.eta--
        if (this.eta >= 0) {
            this.etaChange.emit(this.eta);
        } else {
            this.eta = 0;
        }
    }

    ngOnInit(): void {
    }

}
