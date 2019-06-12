import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  restaurantes:boolean = true;
  zona:boolean= false;
  idUsuario:string;

  selecionadoZona:string="nada";

  constructor(private storage: Storage, private menu: MenuController, public http:HttpService, public route:Router, public activatedRoute:ActivatedRoute) { 

    this.idUsuario = this.activatedRoute.snapshot.paramMap.get('id');

     // set a key/value
     storage.set('idUsuario', this.idUsuario);


       // Or to get a key/value pair
      storage.get('idUsuario').then((val) => {
        console.log('El ID es', val);
      });


    

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

  entrarZona(){

   
    console.log(this.selecionadoZona);
    if(this.selecionadoZona == "nada"){
      return;
    }
    
     this.restaurantes = false;
    this.zona = true;

    this.traerRestaurantes(this.selecionadoZona);
  }

  estable:any
  traerRestaurantes(valor:string){

    this.http.traerRestaurantes(valor).then(
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

  verMenu(id:string, nombre:string, direccion:string, telefono:string, ruta:string){

    console.log("Lo que se envia "+id+nombre+direccion+telefono+ ruta);
    this.route.navigateByUrl("/menurestaurante/"+id+"/"+nombre+"/"+direccion+"/"+telefono+"/"+ruta);
   
  }


  irA(vinculo:string){
    console.log(vinculo);

    this.route.navigateByUrl(vinculo);
  }

}
