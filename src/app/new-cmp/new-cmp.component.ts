import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  todayDate:any;
  newComponentProperty:any;
  newComponent="This is a new component created for angular Routing";
  constructor( private myService:MyserviceService) { }
  ngOnInit() {
    this.todayDate=this.myService.showTodayDate();
    this.newComponentProperty=this.myService.serviceproperty;
  }

}
