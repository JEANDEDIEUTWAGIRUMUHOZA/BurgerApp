import {Component, OnInit} from '@angular/core';
import {Veggie} from '../models/veggie';
import {Meat} from '../models/meat';
import {Bread} from '../models/bread';
import {Cheese} from '../models/cheese';
import {BurgerService} from '../burger.service';
import {BreadService} from '../bread.service';
import {MeatService} from '../meat.service';
import {CheeseService} from '../cheese.service';
import {VeggieService} from '../veggie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-burger',
  templateUrl: './add-burger.component.html',
  styleUrls: ['./add-burger.component.css']
})
export class AddBurgerComponent implements OnInit {

  /**
   * Je vais créer une variable par champ, et malheureusement par nous il y en a beaucoup !
   */
  name: string;
  bread: Bread;
  meat: Meat;
  isDouble: boolean; // Je vais lié cette variable à une checkbox, si cochée alors le boolean sera vrai
  cheese1: Cheese;
  cheese2: Cheese;
  veggie1: Veggie;
  veggie2: Veggie;
  veggie3: Veggie;
  veggie4: Veggie;
  veggie5: Veggie;
  isVeggieTooMany: boolean; // Un boolean dont je vais me servir pour la validation

  constructor(
    public burgerService: BurgerService,
    public breadService: BreadService,
    public meatService: MeatService,
    public cheeseService: CheeseService,
    public veggieService: VeggieService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  save() {
    // Aant de sauvegarder, je vais vérifier s'il n'y a pas le même légume trois fois.
    if (this.isVeggieTooManyCalculator()) {
      this.isVeggieTooMany = true;
    } else {
      this.isVeggieTooMany = false;
      // J'utilise une ternaire pour déterminer si je mets deux viande dans mon tableau, ou une seule
      const meatToSave: Array<Meat> = this.isDouble ? [this.meat, this.meat] : [this.meat];
      // J'utilise la même logique pour ne pas mettre des données null dans mon burger pour ce qui est non obligatoire
      const cheesesToSave: Array<Cheese> = [];
      if (this.cheese1) cheesesToSave.push(this.cheese1);
      if (this.cheese2) cheesesToSave.push(this.cheese2);
      const veggiesToSave: Array<Veggie> = this.veggieTabCreator();
      this.burgerService.save(
        this.name,
        this.bread,
        meatToSave,
        cheesesToSave,
        veggiesToSave);
      // Une fois la sauvegarde effectuée, je veux retourner à la page principale
      this.router.navigate(['burgers']);
    }
  }

  // Normalement, je devrai créer un Validator Custom, mais cela deviendrait trop complexe. Je vais plutôt utiliser un filter.
  isVeggieTooManyCalculator(): boolean {
    const veggieTab = this.veggieTabCreator();
    for (const veggie of veggieTab) {
      // Pour chaque élément de mon tableau, je vérifie s'il apparait plus de 3 fois dans le tableau
      if (veggie && veggieTab.filter(veg => veg.id === veggie.id).length > 3) {
        return true;
      }
    }
    return false;
  }

  // Pour éviter de la répétition de code
  veggieTabCreator(): Array<Veggie> {
    // Je ne rajoute que les éléments non null
    const veggieTab = [];
    if (this.veggie1) veggieTab.push(this.veggie1);
    if (this.veggie2) veggieTab.push(this.veggie2);
    if (this.veggie3) veggieTab.push(this.veggie3);
    if (this.veggie4) veggieTab.push(this.veggie4);
    if (this.veggie5) veggieTab.push(this.veggie5);
    return veggieTab;
  }

}
