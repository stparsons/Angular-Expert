import { AuthorsService } from './author.service';
import { Component } from '@angular/core';

@Component({
    selector: 'authors', 
    template: `
        <h2>{{ authors.length }} {{ title }}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
    `
})
export class AuthorsComponent {
    title = "Athors in list";
    authors;

    constructor(service: AuthorsService) {
        this.authors = service.getAuthors();
    }
}