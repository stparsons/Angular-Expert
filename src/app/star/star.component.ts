import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
})
export class StarComponent  {
  isFavorite:boolean;
  
  onStarClick() {
    this.isFavorite = !this.isFavorite;
  }

}
