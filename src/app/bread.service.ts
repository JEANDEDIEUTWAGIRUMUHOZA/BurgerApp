import {Injectable} from '@angular/core';
import {Veggie} from './models/veggie';
import {Bread} from './models/bread';
import {FlourService} from './flour.service';

@Injectable({
  providedIn: 'root'
})
export class BreadService {

  idCounter = 0; // Je créé un compteur d'identifiant dans mon service, comme dans une vraie base de donnée.
  breadTab: Array<Bread>;

  constructor(private flourService: FlourService) { // J'injecte le FlourService, car mon pain a besoin de farine !
    const wholeWheatCereal = new Bread(++this.idCounter, true, this.flourService.getOne(6));
    const flaxClassic = new Bread(++this.idCounter, false, this.flourService.getOne(1));
    const wholeFlaxClassic = new Bread(++this.idCounter, false, this.flourService.getOne(2));
    const ryeCereal = new Bread(++this.idCounter, true, this.flourService.getOne(3));
    const wholeRyeCereal = new Bread(++this.idCounter, true, this.flourService.getOne(4));
    const wheatClassic = new Bread(++this.idCounter, false, this.flourService.getOne(5));
    this.breadTab = [wholeWheatCereal, flaxClassic, wholeFlaxClassic, ryeCereal, wholeRyeCereal, wheatClassic];
  }

  getAll() {
    return this.breadTab;
  }

  getOne(id: number) {
    return this.breadTab.filter(bread => bread.id === id)[0];
  }
}
