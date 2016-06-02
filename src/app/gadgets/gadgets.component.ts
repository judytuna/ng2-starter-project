import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gadgets',
  template: `
    <div>hello i am the gadgets page.</div>
    `
})
export class GadgetsComponent implements OnInit {
  body: string = 'We are on gadgets now.';

  constructor() {

  }

  ngOnInit() {

  }

}
