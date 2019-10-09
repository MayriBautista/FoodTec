import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpmayriService } from '../httpmayri.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  idPago:string = "1";
  idUsuario:string = "";
  idRestaurante:string = "";
 
  idProducto:any;
  especificaciones:string = null;
  ubicacion:string = null;
  cantidad: any = "1";

  nombre=null;
  descripcion=null;
  precio:any;

  constructor(public toastController:ToastController ,public storage: Storage, private activatedRoute: ActivatedRoute, private menu: MenuController, public http:HttpmayriService, public route: Router) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
    });
  }

  total() {
    var totalc;
    console.log(this.cantidad+"<--cantidad "+this.precio+"<--precio");
    totalc=parseInt(this.cantidad) * parseFloat(this.precio);
    console.log(totalc);
    this.comprar(totalc);
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

    if(this.especificaciones == null){
      this.especificaciones = "ninguna";

    }

    if(this.ubicacion == null){

      this.presentToast();
      return
    }

  //  http://127.0.0.1:8000/insertarPedido/0/1/1/30/1/ninguna/1/30/SC2
    console.log(this.idUsuario+this.idRestaurante+this.idProducto+this.precio+this.idPago+this.especificaciones+totalc+this.ubicacion);
    this.http.insertarPedido(this.idUsuario,this.idRestaurante,this.idProducto,this.precio,this.idPago,this.especificaciones,totalc,this.ubicacion,this.cantidad).then(
      (inv) => {
        console.log(inv);
        this.route.navigateByUrl('/compraexit/'+this.cantidad+"/"+totalc+"/"+this.nombre);

        
      },
      (error) => {
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No podemos enviarte tu producto si no pones tus referencias de ubicacion',
      duration: 2000
    });
    toast.present();
  }

}
