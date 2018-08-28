import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
    <button class="btn btn-primary" [style.backgroundColor] = "isActive ? 'blue' : 'white'" >Save</button>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}