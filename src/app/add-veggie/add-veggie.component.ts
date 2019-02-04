import {Component, OnInit} from '@angular/core';
import {VeggieService} from '../veggie.service';

@Component({
  selector: 'app-add-veggie',
  templateUrl: './add-veggie.component.html',
  styleUrls: ['./add-veggie.component.css']
})

export class AddVeggieComponent implements OnInit {
  name: string; // Les légumes ont pour seul attribut le nom. Je déclare donc un string que je vais lier à un champ texte

  constructor(public vs: VeggieService) { // J'ai besoin du légume service pour sauvegarder mon légume (Sans mauvais jeu de mots :D)
  }

  ngOnInit() {
  }

  save() {
    this.vs.save(this.name);
  }

}
