import {Component, OnInit} from '@angular/core';
import {MessageService} from '../shared';
import { GadgetsComponent } from '../+gadgets';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [GadgetsComponent]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.message = this.messageService.getMessage();
  }

  updateMessage(m: string): void {
    this.messageService.setMessage(m);
  }
}
