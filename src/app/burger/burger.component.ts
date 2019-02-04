import {Component, Input, OnInit} from '@angular/core';
import {Burger} from '../models/burger';
import {BurgerService} from '../burger.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  // Le but de ce composant est seulement d'afficher un burger, donné par le parent. Pour que le parent puisse lui
  // donner, il faut que j'utilise la puissance de l'Input
  @Input() burgerChild: Burger;

  constructor(private burgerService: BurgerService) {
  }

  ngOnInit() {
  }

  deleteBurger() {
    this.burgerService.delete(this.burgerChild.id);
  }

}
