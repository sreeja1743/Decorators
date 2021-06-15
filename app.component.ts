import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name:string = "";
   outputAge:number = 0;
   phoneNumber:number = 0;

   doClick(name:string){
    this.name = name;
   }
   getAgeFromChild(eventEmitterValue:number)
  {
    this.outputAge = eventEmitterValue;
  }
  getPhoneNumberFromChild(eventEmitterValue:number){
    this.phoneNumber = eventEmitterValue;
  }
}
