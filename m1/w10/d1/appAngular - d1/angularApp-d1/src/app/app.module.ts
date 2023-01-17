import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './users/users/users.component';


const routes : Route[] =[
{
    path: "utente",
    component:UserComponent
},
{
    path: "utenti",
    component: UsersComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
