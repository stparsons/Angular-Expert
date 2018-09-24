import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  catagories = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Languages"}
  ];

  @Input("hasGuarantee") hasGuarantee = "true";

  onCourseNameChange(crsNm){
    console.log(crsNm);
  }

  submit(frm) {
    console.log(frm);
  }

}
