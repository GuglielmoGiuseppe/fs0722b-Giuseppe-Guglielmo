import { Component } from '@angular/core';
import { Interface } from './interface/interface.interface';
import { UsersService } from './services/users.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appAngular';

  newUser:{
    frist_name: string;
    last_name:string;
  } = {
    frist_name: "",
    last_name: "",
  }

  sub!:Subscription;
  users: Interface[] | undefined;

  constructor(private userSrv:UsersService){
  }

  ngOnInit(): void{
    this.recuperaUtenti();
  }

  recuperaUtenti(){
    this.sub = this.userSrv.get().subscribe((ris)=>{
        console.log(ris);
        this.users = ris;
    })
  }

  creaUtente(){
    this.sub = this.userSrv.post(this.newUser).subscribe((ris) =>{
        console.log(ris);
        this.users?.push(ris);
    })
  }

  CancellaUtente(id: number){
    this.sub = this.userSrv.delete(id).subscribe(() =>{
        this.users = this.users?.filter((user) => user.id != id);
        console.log(`utente${id} cancellato!`);
    })
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
