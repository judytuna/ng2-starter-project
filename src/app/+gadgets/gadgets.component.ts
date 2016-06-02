import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gadgets',
  templateUrl: './app/+gadgets/gadgets.component.html',
  styleUrls: ['./app/+gadgets/gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  body: string = 'We are on gadgets now.';

  constructor() {

  }

  ngOnInit() {

  }

}
