import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = "Service Created";
  constructor() { }
  showTodayDate(){
    let date=new Date();
    return date;
  }
}
