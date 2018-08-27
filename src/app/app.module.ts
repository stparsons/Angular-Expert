import { CarsService } from './cars.service';
import { AuthorsComponent } from './authors.component';
import { AuthorService, AuthorsService } from './author.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    AuthorComponent,
    CarsComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
