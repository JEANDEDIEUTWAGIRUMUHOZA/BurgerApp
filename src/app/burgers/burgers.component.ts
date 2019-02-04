import {Component, OnInit} from '@angular/core';
import {Burger} from '../models/burger';
import {BurgerService} from '../burger.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  burgers: Array<Burger>;

  /**
   * On a besoin du burgerService pour récupérer nos données :)
   */
  constructor(public bs: BurgerService) {
  }

  ngOnInit() {
    console.log('ON INIT');
    this.burgers = this.bs.getAll();
  }

}
