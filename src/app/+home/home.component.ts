import {Component, OnInit} from '@angular/core';
import {MessageService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;

  constructor(private stateService: MessageService) { }

  ngOnInit() {
    this.message = this.stateService.getMessage();
  }

  updateMessage(m: string): void {
    this.stateService.setMessage(m);
  }
}
