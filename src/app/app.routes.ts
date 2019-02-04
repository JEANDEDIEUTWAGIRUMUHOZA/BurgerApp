import {Routes} from '@angular/router';
import {AddBurgerComponent} from './add-burger/add-burger.component';
import {AddVeggieComponent} from './add-veggie/add-veggie.component';
import {BurgersComponent} from './burgers/burgers.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'burgers', pathMatch: 'full'},
  {path: 'burgers', component: BurgersComponent},
  {path: 'add-burger', component: AddBurgerComponent},
  {path: 'add-veggie', component: AddVeggieComponent}
];
