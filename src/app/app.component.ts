import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url:'/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url:'/cuenta',
      icon: 'person'
    },
    {
      title: 'Cambiar contraseña',
      url: '/cambiarcontra',
      class: 'orange',
      icon: 'lock'
    },
    {
      title: 'Cambiar número',
      url:'/cambiarnum',
      icon: 'phone-portrait',
      color: '#F06702'
    },
    {
      title: 'Eliminar mi cuenta',
      url:'/eliminar',
      icon: 'trash'
    },
    {
      title: 'Cerrar sesión',
      url:'',
      icon: 'power'
    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
