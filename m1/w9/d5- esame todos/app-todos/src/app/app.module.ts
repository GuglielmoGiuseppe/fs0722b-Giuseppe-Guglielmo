import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'completati',
        component: CompletatiComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletatiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
