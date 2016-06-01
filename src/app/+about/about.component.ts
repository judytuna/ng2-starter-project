import {Component, OnInit} from '@angular/core';
import {MessageService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'About Page';
  body: string = 'This is the about page body';
  message: string;

  constructor(public stateService: MessageService) {
  }

  ngOnInit() {
    this.message = this.stateService.getMessage();
  }

  updateMessage(m: string): void {
    this.stateService.setMessage(m);
  }
}
