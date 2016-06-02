import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gadgets',
  templateUrl: './app/+gadgets/gadgets.component.html',
  styleUrls: ['./app/+gadgets/gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  body: string = 'We are on gadgets now.';
  title: string = 'Gadgets';
  color: string = 'green';
  text: string = 'initial value';

  changeColor() {
    const colors = ['red', 'goldenrod', 'orchid'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  constructor() {

  }

  ngOnInit() {

  }

}


// https://api.indiegogo.com/1/campaigns.json?api_token=e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346
