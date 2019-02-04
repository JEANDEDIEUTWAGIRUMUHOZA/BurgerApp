import { Injectable } from '@angular/core';
import {Meat} from './models/meat';

@Injectable({
  providedIn: 'root'
})
export class MeatService {

  idCounter = 0; // Je créé un compteur d'identifiant dans mon service, comme dans une vraie base de donnée.
  meatTab: Meat[]; // Typage alternatif à Array<Veggie>

  constructor() {
    const escalope = new Meat(++this.idCounter, 'Escalope de dinde');
    const escalopeBreaded = new Meat(++this.idCounter, 'Escalope de dinde panée');
    const beef = new Meat(++this.idCounter, 'Steak de boeuf');
    const salmon = new Meat(++this.idCounter, 'Filet de saumon');
    const tofu = new Meat(++this.idCounter, 'Tranche de Tofu');
    this.meatTab = [escalope, escalopeBreaded, beef, salmon, tofu];
  }

  getAll() {
    return this.meatTab;
  }

  getOne(id: number) {
    return this.meatTab.filter(meat => meat.id === id)[0];
  }
}
