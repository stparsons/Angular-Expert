import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canSave = false;
  courses = [
    {id: 1, name: 'Course A'},
    {id: 2, name: 'Course B'},
    {id: 3, name: 'Course C'}   
  ];
  
  onAdd(){
    this.courses.push({id:5, name: 'Course D'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name = "changed";
  }
}
