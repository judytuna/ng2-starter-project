import {Component, OnInit} from '@angular/core';
import {Item, ItemsService} from './shared';
import {MessageService} from '../shared';
import {ItemDetailsComponent} from './item-details';

@Component({
  moduleId: module.id,
  selector: 'app-items',
  templateUrl: 'items.component.html',
  directives: [ItemDetailsComponent],
  styleUrls: ['items.component.css'],
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {
  title: string = 'Items Page';
  body: string = 'This is the about items body';
  message: string;
  items: Item[];

  constructor(
    private _stateService: MessageService,
    private _itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this._itemsService.getItems();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
