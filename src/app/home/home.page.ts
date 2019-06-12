import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  restaurantes:boolean = true;
  zona:boolean= false;

  constructor(private menu: MenuController, public http:HttpService, public route:Router) { }

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

  entrarZona(){

    this.restaurantes = false;
    this.zona = true;

    this.traerRestaurantes();
  }

  estable:any
  traerRestaurantes(){

    this.http.traerRestaurantes().then(
      (inv) => { 
       console.log(inv);  
       this.estable = inv;   

       
         
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

  verMenu(id:string, nombre:string, direccion:string, telefono:string){

    this.route.navigateByUrl("/menurestaurante");
   
  }


  irA(vinculo:string){
    console.log(vinculo);

    this.route.navigateByUrl(vinculo);
  }

}
