import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'gadgets',
  templateUrl: 'gadgets.component.html',
  styleUrls: ['gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  greeting: string = 'Welcome to the gadgets component!';
  constructor() {}

  ngOnInit() {
    this.greet();
  }

  greet() {
    alert(this.greeting);
  }

}
