import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cambiarnum', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'cambiarcontra', loadChildren: './cambiarcontra/cambiarcontra.module#CambiarcontraPageModule' },
  { path: 'cambiarnum', loadChildren: './cambiarnum/cambiarnum.module#CambiarnumPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
