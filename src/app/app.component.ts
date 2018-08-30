import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-World';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("CLICKED - onFavoriteChange", eventArgs.newValue);
  }
}
