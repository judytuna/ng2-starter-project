import {Component, Input} from '@angular/core';
import {Item} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-item-details',
  templateUrl: 'item-details.component.html',
  styleUrls: ['item-details.component.css']
})

export class ItemDetailsComponent {
  @Input() item: Item;

  addItem(): void {
    this.item.count += 1;
  };
}
