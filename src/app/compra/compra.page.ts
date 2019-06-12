import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpmayriService } from '../httpmayri.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage {
  idPago:string = "1";
  idUsuario:string = "1";
  idRestaurante:string = "1";
  totalPedido:string = "30";

  constructor(private menu: MenuController, public http:HttpmayriService, public route: Router) { 
    this.comprar();
  }

  comprar() {
    console.log(this.idPago+this.idUsuario+this.idRestaurante+this.totalPedido);
    this.http.insertarProducto(this.idPago,this.idUsuario,this.idRestaurante,this.totalPedido).then(
      (inv) => {
        console.log(inv);
        
      },
      (error) => {
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
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
