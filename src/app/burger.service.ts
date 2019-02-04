import {Injectable} from '@angular/core';
import {Veggie} from './models/veggie';
import {BreadService} from './bread.service';
import {MeatService} from './meat.service';
import {VeggieService} from './veggie.service';
import {Burger} from './models/burger';
import {Cheese} from './models/cheese';
import {CheeseService} from './cheese.service';
import {Bread} from './models/bread';
import {Meat} from './models/meat';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  idCounter = 0; // Je créé un compteur d'identifiant dans mon service, comme dans une vraie base de donnée.
  burgerTab: Burger[]; // Typage alternatif à Array<Veggie>

  // Mon burger a besoin de tous les services, sauf du FlourService qui n'est utile qu'au niveau du BreadService
  constructor(
    private bs: BreadService,
    private ms: MeatService,
    private cs: CheeseService,
    private vs: VeggieService) {
    // Je vais étaler la création du burger afin de la rendre plus claire.
    const crazyC = new Burger(
      ++this.idCounter,
      'Crazy Carnivore',
      this.bs.getOne(1), // je vais récupérer un pain grace au service (Whole Wheat Cereal)
      [this.ms.getOne(3), this.ms.getOne(3)], // Je fais un tableau de viande (Beef)
      [this.cs.getOne(2), this.cs.getOne(2)], // Du bleu !
      [] // Pas de légume !
    );

    const rabbit = new Burger(
      ++this.idCounter,
      'Rabbit bit bit',
      this.bs.getOne(2), // Whole lin
      [this.ms.getOne(5), this.ms.getOne(5)], // Tofu
      [], // Pas de fromage
      [this.vs.getOne(1), this.vs.getOne(2), this.vs.getOne(3), this.vs.getOne(4), this.vs.getOne(5)] // VEGGIE POWER
    );

    const normalPerson = new Burger(
      ++this.idCounter,
      'Normal Person',
      this.bs.getOne(6), // Wheat Classic
      [this.ms.getOne(1)], // Escalope Panée
      [this.cs.getOne(1), this.cs.getOne(3)], // Emmental/chèvre
      [this.vs.getOne(2), this.vs.getOne(3), this.vs.getOne(4)] // Salade/Tomate/Oignon
    );

    this.burgerTab = [crazyC, rabbit, normalPerson];
  }

  getAll() {
    return this.burgerTab;
  }

  getOne(id: number) {
    return this.burgerTab.filter(burger => burger.id === id)[0];
  }

  /**
   * Je préfère que la construction de mon objet ait lieu dans mon service plutôt que dans mon composant.
   */
  save(name: string, bread: Bread, meats: Array<Meat>, cheeses: Array<Cheese>, veggies: Array<Veggie>) {
    this.burgerTab.push(new Burger(++this.idCounter, name, bread, meats, cheeses, veggies));
  }

  delete(id: number) {
    this.burgerTab.splice(this.burgerTab.indexOf(this.getOne(id)), 1);
  }
}
