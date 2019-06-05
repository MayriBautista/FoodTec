import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CambiarcontraPage } from './cambiarcontra.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarcontraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CambiarcontraPage]
})
export class CambiarcontraPageModule {}
