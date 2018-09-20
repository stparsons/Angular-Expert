import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  constructor() { 
    console.log('isLiked: ' + this.isActive + ' likeCounts: ' + this.likesCount);
  }

  @Input('likesCount') likesCount: number = 0;
  @Input('isActive') isActive: boolean = false;

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;   
    this.isActive = !this.isActive;
  }
}
