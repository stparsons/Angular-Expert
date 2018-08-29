import { TitleCasePipe } from './../title-case.pipe';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'text-transform',
  templateUrl: './text-transform.component.html',
  styleUrls: ['./text-transform.component.css']
})
export class TextTransformComponent implements OnInit {
  text:string;

  onKeyUp() {

  }
  constructor() { }

  ngOnInit() {
  }

}
