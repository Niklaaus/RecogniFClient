import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainComponent } from './train.component';
import { RecogComponent } from './recog.component';
import { AsknameComponent } from './askname.component';

const appRoutes: Routes = [
  { path: 'train', component: TrainComponent },
  { path: 'recog', component: RecogComponent },
  { path: 'askname', component: AsknameComponent }
 
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
