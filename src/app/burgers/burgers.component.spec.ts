import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BurgersComponent} from './burgers.component';
import {Burger} from '../models/burger';
import {BurgerService} from '../burger.service';
import {BurgerComponent} from '../burger/burger.component';
import {Bread} from '../models/bread';
import {Flour} from '../models/flour';
import {Meat} from '../models/meat';

describe('BurgersComponent', () => {
  let component: BurgersComponent;
  let fixture: ComponentFixture<BurgersComponent>;
  let element: any;
  let burgerTestOne = new Burger(1, 'Carnivore',
    new Bread(1, true,
      new Flour(1, 'Test', true)),
    [
      new Meat(1, 'Boeuf')
    ], [], []);
  let burgerTestTwo = new Burger(2, 'Veggies',
    new Bread(1, true,
      new Flour(1, 'Test', true)),
    [
      new Meat(1, 'Soja')
    ], [], []);
  let burgerTestThree = new Burger(3, 'Normal',
    new Bread(1, true,
      new Flour(1, 'Test', true)),
    [
      new Meat(1, 'Esclaope')
    ], [], []);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BurgersComponent,
        BurgerComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgersComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    spyOn(component.bs, 'getAll').and.returnValue([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with a row class', () => {
    const divWithRow = element.querySelector('.row');
    expect(divWithRow).not.toBeNull('Should not be null');
    expect(divWithRow).toBeDefined('Should be defined !');
    expect(divWithRow).toBeTruthy();
    expect(divWithRow).not.toBeFalsy();
  });

  it('should show one burger component by burger', () => {
    component.burgers = [burgerTestOne, burgerTestTwo, burgerTestThree];
    fixture.detectChanges();
    let appBurger = element.querySelectorAll('app-burger');
    expect(appBurger.length).toEqual(3,
      'the burgers component should show 3 burgers');
    component.burgers = [burgerTestOne];
    fixture.detectChanges();
    appBurger = element.querySelectorAll('app-burger');
    expect(appBurger.length).toEqual(1,
      'the burgers component should show 1 burgers');
    component.burgers = [burgerTestOne, burgerTestTwo, burgerTestThree, burgerTestOne, burgerTestThree];
    fixture.detectChanges();
    appBurger = element.querySelectorAll('app-burger');
    expect(appBurger.length).toEqual(5,
      'the burgers component should show 5 burgers');
  });

  it('If no burgers are available show a message', () => {
    component.burgers = [];
    fixture.detectChanges();
    let divError = element.querySelector('.alert.alert-danger');
    console.log(divError);
    expect(divError.textContent).toContain(
      'Aucun burger à afficher',
      'The message should show');
  });

  it('should call getAll from service on component init', () => {
    expect(component.bs.getAll).toHaveBeenCalled();
  });
});
