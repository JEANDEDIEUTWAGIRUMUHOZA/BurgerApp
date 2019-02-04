/**
 * La classe est très simple. On pourrait créer une classe Salade en utilisant le concept d'héritage, mais ce que l'on fera
 * plutôt est de créer un légume qui sera de la salade frisée, un autre qui sera de la laitue.
 */

export class Veggie {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
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
}
