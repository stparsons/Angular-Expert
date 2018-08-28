import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
    <div (click)="onDivClick()">
        <button (click)="onSave($event)">Save</button>
    </div>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("BUTTON WAS CLICKED", $event);
    }

    onDivClick() {
        console.log("HIT DIV")
    }
}