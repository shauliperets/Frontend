import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
