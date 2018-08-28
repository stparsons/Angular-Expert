import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onKeyUp(email) {
        console.log(email.value);
    }
}