import {Injectable} from '@angular/core';
import {Cheese} from './models/cheese';

@Injectable({
  providedIn: 'root'
})
export class CheeseService {
  idCounter = 0; // Je créé un compteur d'identifiant dans mon service, comme dans une vraie base de donnée.
  cheeseTab: Cheese[]; // Typage alternatif à Array<Veggie>

  constructor() {
    const emmental = new Cheese(++this.idCounter, 'Emmental');
    const blue = new Cheese(++this.idCounter, 'Bleu');
    const goat = new Cheese(++this.idCounter, 'Chèvre');
    this.cheeseTab = [emmental, blue, goat];
  }

  getAll() {
    return this.cheeseTab;
  }

  getOne(id: number) {
    return this.cheeseTab.filter(cheese => cheese.id === id)[0];
  }
}
