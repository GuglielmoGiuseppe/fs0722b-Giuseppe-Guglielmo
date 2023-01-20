import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RegistrerComponent } from './registrer/registrer/registrer.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { PopularComponent } from './popular/popular/popular.component';
import { LoginComponent } from './login/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LogInterceptor } from './interceptors/log.interceptor';
import { FormsModule } from '@angular/forms';
const routes : Route[] =[
  {
      path: "login",
      component:LoginComponent
  },
  {
    path: "profile",
    component:ProfileComponent
},
  {
      path: "registrer",
      component: RegistrerComponent
  },{
    path: "popular",
    component: PopularComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrerComponent,
    ProfileComponent,
    PopularComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  },
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
