import { Component, ViewChild } from '@angular/core';
import { MenuController, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage {
  espera: boolean = false;
  entregado: boolean = true;
  eleccion(num: any) {
    if(num==1) {
      this.espera=false;
      this.entregado=true;
    }else if(num==2) {
      this.espera=true;
      this.entregado=false;
    }
  }

  constructor(private menu: MenuController) { 
  }

  openFirst() {
    console.log("click OpenFirst");
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    console.log("click OpenEnd");
    this.menu.open('end');
  }

  openCustom() {
    console.log("click OpenCustom");
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
