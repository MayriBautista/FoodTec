import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpmayriService } from '../httpmayri.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  idPago:string = "";
  idUsuario:string = "";
  idRestaurante:string = "";
  totalc:any;
  idProducto:any;
  especificaciones:string = "";
  ubicacion:string = "";
  cantidad: any = "1";

  nombre=null;
  descripcion=null;
  precio:any;

  constructor(private storage: Storage, private activatedRoute: ActivatedRoute, private menu: MenuController, public http:HttpmayriService, public route: Router) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
    });
  }

  total() {
    console.log(this.cantidad+"<--cantidad "+this.precio+"<--precio");
    this.totalc=parseInt(this.cantidad) * parseFloat(this.precio);
    console.log(this.totalc);
    this.comprar(this.totalc);
  }

  ngOnInit() {
    this.idUsuario = this.activatedRoute.snapshot.paramMap.get('idUsuario');
    this.idProducto = this.activatedRoute.snapshot.paramMap.get('idProducto');
    this.idRestaurante = this.activatedRoute.snapshot.paramMap.get('idRes');
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.descripcion = this.activatedRoute.snapshot.paramMap.get('desc');
    this.precio = this.activatedRoute.snapshot.paramMap.get('precio');

  }
  comprar(totalc:any) {
    console.log(this.idUsuario+this.idRestaurante+this.idProducto+this.precio+this.idPago+this.especificaciones+this.totalc+this.ubicacion);
    this.http.insertarPedido(this.idUsuario,this.idRestaurante,this.idProducto,this.precio,this.idPago,this.especificaciones,this.totalc,this.ubicacion).then(
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
