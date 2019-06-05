import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CambiarnumPage } from './cambiarnum.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarnumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CambiarnumPage]
})
export class CambiarnumPageModule {}
