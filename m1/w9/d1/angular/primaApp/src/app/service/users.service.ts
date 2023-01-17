import { Models } from "../models";

export class UsersService {
  users: Models[] = [];
  constructor() { }

  CreateUser(name: string){
    if(name != undefined || name != "")
    {
      this.users.push({
        name,
        stato: 'occupato'
      });
    }
    console.log(name);
  }

  UpdateUser(index:number,newStatus:string){
    this.users[index].stato = newStatus;
  }
}
