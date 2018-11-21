import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainComponent } from './train.component';

const appRoutes: Routes = [
  { path: 'train', component: TrainComponent }
 
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
