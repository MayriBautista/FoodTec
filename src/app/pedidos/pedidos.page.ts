import { Component } from '@angular/core';
import { MenuController, IonSegment } from '@ionic/angular';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

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

  idUsuario:string;
  fecha:string="";
  idPedido:string="";
  producto:string="";
  cantidad:string="";
  totalPedido:string="";
  ruta:string="http://avisositd.xyz/eneit/gifs/";

  constructor(private menu: MenuController, public http:HttpmayriService,private storage:Storage) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.traerPedidos(this.idUsuario);
    });
  }

  pedidos:any;

  traerPedidos(id: string) {
      this.http.traerPedidos(id).then(
        (inv) => {
          console.log(inv);
          this.pedidos = inv;
        },
        (error) => {
          console.log("Error" + JSON.stringify(error));
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
