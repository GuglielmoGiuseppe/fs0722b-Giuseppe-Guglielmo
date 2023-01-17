import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interface } from '../interface/interface.interface';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<{data: Interface[]}>('https://reqres.in/api/users').pipe(map(ris => ris.data));
  }
  post(newUser: Partial<Interface>){//dal momento che non passiamo tutti i dati, avvisiamo l'applicazione che arriveranno dei dati parziali: quelli che non arrivano  saranno comqune valorizzati con stringe vuote
    return this.http.post<Interface>('https://reqres.in/api/users', newUser);
  }

  delete(id: number){
    return this.http.delete(`https://reqres.in/api/users/${id}`)
  }
}
