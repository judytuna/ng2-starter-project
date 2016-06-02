import { Component, OnInit } from '@angular/core';
import { WidgetsService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-widgets',
  templateUrl: 'widgets.component.html',
  styleUrls: ['widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
  }

}
