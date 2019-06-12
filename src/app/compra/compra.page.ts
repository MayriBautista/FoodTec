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
  totalPedido:string = "";
  especificaciones:string = "";
  ubicacion:string = "";
  cantidad: any = "1";

  nombre=null;
  descripcion=null;
  precio:any;

  constructor(private storage: Storage, private activatedRoute: ActivatedRoute, private menu: MenuController, public http:HttpmayriService, public route: Router) { 
    storage.get(this.idUsuario).then((val) => {
      console.log('Usuario', val);
    });
  }

  total () {
    var totalc=parseInt(this.cantidad) * parseFloat(this.precio);
  }

  ngOnInit() {
    this.idUsuario = this.activatedRoute.snapshot.paramMap.get('idUsuario');
    this.idRestaurante = this.activatedRoute.snapshot.paramMap.get('idRestaurante');
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.especificaciones = this.activatedRoute.snapshot.paramMap.get('especificaciones');
    this.precio = this.activatedRoute.snapshot.paramMap.get('precio');

  }
  comprar() {
    console.log(this.idPago+this.idUsuario+this.idRestaurante+this.totalPedido+this.especificaciones+this.ubicacion);
    this.http.insertarPedido(this.idPago,this.idUsuario,this.idRestaurante,this.totalPedido, this.especificaciones, this.ubicacion).then(
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
