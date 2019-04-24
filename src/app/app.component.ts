import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './myservice.service'
import { HttpClient } from '@angular/common/http';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import 'rxjs/add/operator/map';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
      div{
        width=200px;
        margin:0 auto;
        text-align:center;
      }
    .rotate{
        width:100px;
         height:100px;
         border:solid 1px red;
      }
  `],



    animations:[
      trigger('myanimation',[
        state('smaller',style({
            transform:'translateY(0px)'
        })),
        state('larger',style({
          transform:'translateY(100px'
        })),
        transition('smaller <=> larger', animate('300ms ease-in'))
      ])
    ]
})

export class AppComponent {
  state:string="smaller";
  animate(){
      this.state=this.state=='larger'?'smaller':'larger';
  }

  title = 'tutorial-point';
  formdata;
  months=["Jan","Feb","Mar","April","May","June","July","Aug",
  "Sept","Oct","Nov","Dec"];
  isBoolean=true;
  todaydate=new Date();
  jsonval={name:'Dav',age:24,address:{a1:'Itahari',a2:'Nepal'}};

  myClickfunction(event){
    this.isBoolean=false;
    // console.log(event);
    // alert("Button is clicked !");
  }
  changeMonth(event){
    console.log(event);
    alert("Selection made from dropdown !");
  }

  todayDate:any;
  componentProperty:any;
  httpdata:any;
  searchparam=3;
  emailid;
  constructor(private myService:MyserviceService,private http:HttpClient){}
  ngOnInit(){
    this.todayDate=this.myService.showTodayDate();
    this.myService.serviceproperty="Component Created !!!";
    this.componentProperty=this.myService.serviceproperty;
    
    this.http.get("http://jsonplaceholder.typicode.com/users?id="+this.searchparam).
      subscribe((data) => this.dispayData(data));

      this.formdata=new FormGroup({
        // emailid: new FormControl("david@gmail.com"),
        emailid: new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern("[^@]+@[^@]*")
        ])
        ),
        // passwd: new FormControl("abcdefg")
        //custom validation
        passwd: new FormControl("",this.passwordvalidation)
      });
  }
  dispayData(data) {
    this.httpdata=data;
  }
  onClickSubmit(data){
      // alert("Entered email is: "+data.emailid)
      this.emailid=data.emailid;
  }
  passwordvalidation(formcontrol){
      if(formcontrol.value.length<5){
        return {"passwd":false}
      }
  }

}
