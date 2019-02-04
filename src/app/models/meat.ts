/**
 * Ce qui m'embête, c'est le panée. Par souci de simplicité, je vais faire comme pour les salades, il y aura une viande
 * Escalope Panée et une autre Escalope tout court
 */
export class Meat {
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
