import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input('showBody') showBody:boolean = false;
  @Input('title') title:string;
  
  constructor() { }

  onClick() {
    this.showBody = !this.showBody;
  }

  ngOnInit() {
  }

}
