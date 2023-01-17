import { Component } from '@angular/core';
import { UsersService } from './service/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'primaApp';

  constructor(private userSrv: UsersService){}
}
