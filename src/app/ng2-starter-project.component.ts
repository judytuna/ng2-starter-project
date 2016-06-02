import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import { AboutComponent } from './+about';
import { ItemsComponent } from './+items';
import {MessageService} from './shared';

@Component({
  moduleId: module.id,
  selector: 'ng2-starter-project-app',
  templateUrl: 'ng2-starter-project.component.html',
  styleUrls: ['ng2-starter-project.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MessageService]
})
@Routes([
  {path: '/', component: HomeComponent },
  {path: '/home', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '/items', component: ItemsComponent},
  {path: '/*', component: HomeComponent }
])
export class Ng2StarterProjectAppComponent {
  constructor(private router: Router) {}
}
