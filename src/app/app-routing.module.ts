import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menurestaurante', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'cambiarcontra', loadChildren: './cambiarcontra/cambiarcontra.module#CambiarcontraPageModule' },
  { path: 'cambiarnum', loadChildren: './cambiarnum/cambiarnum.module#CambiarnumPageModule' },
  { path: 'eliminar', loadChildren: './eliminar/eliminar.module#EliminarPageModule' },
  { path: 'billetera', loadChildren: './billetera/billetera.module#BilleteraPageModule' },
  { path: 'menurestaurante', loadChildren: './menu-restaurante/menu-restaurante.module#MenuRestaurantePageModule' },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
