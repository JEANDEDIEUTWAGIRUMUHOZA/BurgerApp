/**
 * Deux attributs : complet et type. Le premier étant binaire, on utilise un boolean.
 */
export class Flour {
  private _id: number;
  private _type: string; // Blé, lin, quinoa, noix de coco...
  private _isWhole: boolean;

  constructor(id: number, type: string, isWhole: boolean) {
    this._id = id;
    this._type = type;
    this._isWhole = isWhole;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get isWhole(): boolean {
    return this._isWhole;
  }

  set isWhole(value: boolean) {
    this._isWhole = value;
  }
}
