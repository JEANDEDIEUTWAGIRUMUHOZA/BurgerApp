/**
 * La classe la plus complexe, dans le sens où elle contient toutes les autres !
 * On commence par les attributs les plus, simple, le nom et l'id.
 * On continue avec le pain. Un burger ne peut avoir qu'un type de pain, donc il n'en possèdera qu'un seul.
 * Pour la viande, il peut en avoir deux dans le burger, mais du même type. Il existe donc deux solutions : soit je
 * pars du principe que là dessus le produit ne va pas évoluer, du coup je créé l'attribut du type viande, puis un boolean
 * ou évenuellement un number) pour signifier si notre burger est double. Sinon, je peux créer un tableau de viande,
 * ce qui permettra de facilement faire évoluer mon produit (par exemple si je passe sur du triple à l'avenir). Comme
 * mon produit est jeune, j'opte pour la seconde solution.
 * Même logique pour le Fromage
 * Enfin, il reste les Légumes. Il peut y en avoir plusieurs par burger, je vais donc simplement utiliser un tableau.
 */
import {Bread} from './bread';
import {Meat} from './meat';
import {Veggie} from './veggie';
import {Cheese} from './cheese';

export class Burger {
  private _id: number;
  private _name: string;
  private _bread: Bread;
  private _meats: Array<Meat>; // On n'oublie pas le pluriel pour signifier qu'il s'agit d'un tableau
  private _cheeses: Array<Cheese>;
  private _veggies: Array<Veggie>;

  constructor(id: number, name: string, bread: Bread, meats: Array<Meat>, cheeses: Array<Cheese>, veggies: Array<Veggie>) {
    this._id = id;
    this._name = name;
    this._bread = bread;
    this._meats = meats;
    this._cheeses = cheeses;
    this._veggies = veggies;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get bread(): Bread {
    return this._bread;
  }

  set bread(value: Bread) {
    this._bread = value;
  }

  get meats(): Array<Meat> {
    return this._meats;
  }

  set meats(value: Array<Meat>) {
    this._meats = value;
  }

  get cheeses(): Array<Cheese> {
    return this._cheeses;
  }

  set cheeses(value: Array<Cheese>) {
    this._cheeses = value;
  }

  get veggies(): Array<Veggie> {
    return this._veggies;
  }

  set veggies(value: Array<Veggie>) {
    this._veggies = value;
  }
}
