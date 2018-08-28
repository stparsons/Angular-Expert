import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;
    email = "myEmail@yahoo.com"; // This does not need to be pre-defined

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onKeyUp() {
        console.log(this.email);
    }
}