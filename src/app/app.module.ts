import { SummaryPipe } from './summary.pipe';
import { CarsService } from './cars.service';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './author.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { TextTransformComponent } from './text-transform/text-transform.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    AuthorComponent,
    CarsComponent,
    SummaryPipe,
    StarComponent,
    TextTransformComponent,
    TitleCasePipe 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
