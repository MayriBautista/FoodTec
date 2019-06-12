import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuRestaurantePage } from './menu-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRestaurantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuRestaurantePage]
})
export class MenuRestaurantePageModule {}
