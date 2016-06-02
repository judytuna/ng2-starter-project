import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'gadgets',
  templateUrl: 'gadgets.component.html',
  styleUrls: ['gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  title: string = 'Gadgets';
  favoriteGadget: string = 'iPad Mini';
  asyncData: {gadget: string};
  shouldShowFavorite: boolean = false;
  constructor() {}

  ngOnInit() {
  }

  getAsyncData() {
    this.asyncData = null;
    setTimeout(() => {
      this.asyncData = {gadget: this.favoriteGadget};
    }, 1000);
  }

  toggleFavorite() {
    this.shouldShowFavorite = !this.shouldShowFavorite;
  }
}
