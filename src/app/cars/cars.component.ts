import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars;
  
  constructor(service: CarsService) { 
    this.cars = service.getCars();
  }

  ngOnInit() {
  }

}
