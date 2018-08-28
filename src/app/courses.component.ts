import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <input (keyup.enter)="onKeyUp()"/>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onKeyUp() {
        console.log("ENTER WAS PRESSED");
    }
}