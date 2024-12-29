import { Routes } from '@angular/router';
import { ButtonTestComponent } from './button-test/button-test.component';

export const routes: Routes = [
  { path: 'button-test', component: ButtonTestComponent },
  { path: '**', component: ButtonTestComponent },
];
