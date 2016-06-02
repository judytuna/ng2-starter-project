import { Component, OnInit } from '@angular/core';
import { GadgetsService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'gadgets',
  templateUrl: 'gadgets.component.html',
  styleUrls: ['gadgets.component.css'],
  providers: [GadgetsService]
})
export class GadgetsComponent implements OnInit {
  title: string = 'Gadgets';
  favoriteGadget: string = 'iPad Mini';
  asyncData: {gadget: string};
  shouldShowFavorite: boolean = false;

  constructor(private gadgetsService: GadgetsService) {}

  ngOnInit() {
    this.setFavorite();
  }

  setFavorite() {
    this.gadgetsService.setFavorite(this.favoriteGadget);
  }

  getAsyncData() {
    this.asyncData = null;
    this.gadgetsService.getAsyncData()
      .then((gadget) => {
        this.asyncData = gadget;
      });
  }

  toggleFavorite() {
    this.shouldShowFavorite = !this.shouldShowFavorite;
  }
}
