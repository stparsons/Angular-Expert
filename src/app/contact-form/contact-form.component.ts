import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: "Email"},
    {id: 2, name: "Phone"}
  ];

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f); // Logs the NgForm and all of it
    console.log(f.value); // Logs the value of f, which is a json version
  }
}
