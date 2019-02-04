import {Injectable} from '@angular/core';
import {Flour} from './models/flour';

@Injectable({
  providedIn: 'root'
})
export class FlourService {

  idCounter = 0; // Je créé un compteur d'identifiant dans mon service, comme dans une vraie base de donnée.
  flourTab: Array<Flour>;

  constructor() {
    const flax = new Flour(++this.idCounter, 'Lin', false);
    const flaxWhole = new Flour(++this.idCounter, 'Lin', true);
    const rye = new Flour(++this.idCounter, 'Seigle', false);
    const ryeWhole = new Flour(++this.idCounter, 'Seigle', true);
    const wheat = new Flour(++this.idCounter, 'Blé', false);
    const wheatWhole = new Flour(++this.idCounter, 'Blé', true);
    // Sémantique alternative pour l'instantiation d'un tableau.
    // On préfère l'autre rédaction en générale, plus simple.
    this.flourTab = new Array<Flour>(flax, flaxWhole, rye, ryeWhole, wheat, wheatWhole);
  }

  getAll() {
    return this.flourTab;
  }

  getOne(id: number) {
    return this.flourTab.filter(flour => flour.id === id)[0];
  }
}
