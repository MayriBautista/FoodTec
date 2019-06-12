import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpmayriService } from '../httpmayri.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  idPago:string = "1";
  idUsuario:string = "1";
  idRestaurante:string = "1";
  totalPedido:string = "30";
  instrucciones:string = "1";
  especificaciones:string = "1";
  cantidad: any;

  nombre=null;
  descripcion=null;
  precio=null;

  constructor(private activatedRoute: ActivatedRoute, private menu: MenuController, public http:HttpmayriService, public route: Router) { 

  }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.descripcion = this.activatedRoute.snapshot.paramMap.get('descripcion');
    this.precio = this.activatedRoute.snapshot.paramMap.get('precio');

  }
  comprar() {
    console.log(this.idPago+this.idUsuario+this.idRestaurante+this.totalPedido);
    this.http.insertarPedido(this.idPago,this.idUsuario,this.idRestaurante,this.totalPedido, this.instrucciones, this.especificaciones).then(
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
