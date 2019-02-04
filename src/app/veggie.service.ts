import {Injectable} from '@angular/core';
import {Veggie} from './models/veggie';

@Injectable({
  providedIn: 'root'
})
export class VeggieService {
  idCounter = 0; // Je créé un compteur d'identifiant dans mon service, comme dans une vraie base de donnée.
  veggieTab: Veggie[]; // Typage alternatif à Array<Veggie>

  constructor() {
    const curlyLettuce = new Veggie(++this.idCounter, 'Laitue Frisée');
    const lettuce = new Veggie(++this.idCounter, 'Laitue');
    const tomato = new Veggie(++this.idCounter, 'Tomate');
    const onion = new Veggie(++this.idCounter, 'Oignon');
    const pepper = new Veggie(++this.idCounter, 'Poivron');
    const olive = new Veggie(++this.idCounter, 'Olive');
    this.veggieTab = [curlyLettuce, lettuce, tomato, onion, pepper, olive];
  }

  getAll() {
    return this.veggieTab;
  }

  getOne(id: number) {
    return this.veggieTab.filter(veggie => veggie.id === id)[0];
  }

  /**
   * Je préfère que la construction de mon objet ait lieu dans mon service plutôt que dans mon composant.
   */
  save(name: string) {
    this.veggieTab.push(new Veggie(++this.idCounter, name));
  }

  delete(id: number) {
    this.veggieTab.slice(this.veggieTab.indexOf(this.getOne(id)), 1);
  }
}
