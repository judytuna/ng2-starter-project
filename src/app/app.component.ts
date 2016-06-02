import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import { AboutComponent } from './+about';
import { ItemsComponent } from './+items';
import { MessageService } from './shared';
import { WidgetComponent } from './+widget';
import { GadgetsComponent } from './gadgets';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MessageService]
})
@Routes([
  {path: '/', component: HomeComponent },
  {path: '/home', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '/items', component: ItemsComponent},
  {path: '/widget', component: WidgetComponent },
  {path: '/gadgets', component: GadgetsComponent },
  {path: '/*', component: HomeComponent }
])
export class AppComponent {
  constructor(private router: Router) {}
}
