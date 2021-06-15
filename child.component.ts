import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()  childName:string = '';
  @Output() age = new EventEmitter<number>(); 
  @Output() phoneNumber = new EventEmitter<number>();

  changeAge(inputAge:string)
  {
     let newAge:number  = parseInt(inputAge);
     console.log(" Inside child component :- "+newAge);
     
     this.age.emit(newAge);

  }
  changePhoneNumber(phoneNum:string){
    let newPhoneNumber:number = parseInt(phoneNum);
    this.phoneNumber.emit(newPhoneNumber);
  }

}
