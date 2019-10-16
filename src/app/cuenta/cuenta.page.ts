import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit{
  
  ngOnInit(){}
  
  idUsuario:string;
  nombre:string;
  telefono:string;
  email:string;

  constructor(public storage: Storage, public menu: MenuController, public activatedRoute: ActivatedRoute,public http:HttpService) { 
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.traerPerfil(this.idUsuario);
    });
  }
  
  usuario: any;

  traerPerfil(id:string){
    this.http.traerPerfil(id).then(
      (inv) => { 
       console.log(inv);  
       this.usuario = inv;   
      },
      (error) =>{
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
