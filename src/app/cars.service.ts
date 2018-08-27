import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars() {
    return ["Honda", 'Toyota', ];
  }

}
