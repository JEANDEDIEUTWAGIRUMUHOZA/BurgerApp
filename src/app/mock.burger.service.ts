import {Burger} from './models/burger';
import {Observable, of} from 'rxjs';

export class MockBurgerService {
  getAll(): Observable<Array<Burger>> {
    return of([
      new Burger(1, 'Crazy Carnivore', null, [], [], [])
    ]);
  }
}
