import { Injectable } from '@angular/core';

@Injectable()
export class GadgetsService {
  private favoriteGadget: string;

  constructor() {}

  setFavorite(gadget) {
    this.favoriteGadget = gadget;
  }

  getAsyncData(): any {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({gadget: this.favoriteGadget});
      }, 1000);
    });
  }
}
