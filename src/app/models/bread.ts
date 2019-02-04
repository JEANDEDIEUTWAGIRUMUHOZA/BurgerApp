/**
 * Cette classe est un peu complexe, dans le sens où je parle de Farine dans l'énoncé, mais aussi de pain qui peut être
 * classique ou aux céréales... Les états énoncés étant binaires, l'utilisation d'un boolean est une bonne idée.
 */
import {Flour} from './flour';

export class Bread {
  private _id: number;
  private _isCereal: boolean;
  private _flour: Flour;

  constructor(id: number, isCereal: boolean, flour: Flour) {
    this._id = id;
    this._isCereal = isCereal;
    this._flour = flour;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get isCereal(): boolean {
    return this._isCereal;
  }

  set isCereal(value: boolean) {
    this._isCereal = value;
  }

  get flour(): Flour {
    return this._flour;
  }

  set flour(value: Flour) {
    this._flour = value;
  }
}
