
export class LogService {

  constructor() { }

  LongStatusChange(newStatus:string){
    console.log(`Nuovo stato per per l\'utente: ${newStatus}`)
  }
}
