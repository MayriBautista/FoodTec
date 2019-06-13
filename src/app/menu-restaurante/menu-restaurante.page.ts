import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-menu-restaurante',
  templateUrl: './menu-restaurante.page.html',
  styleUrls: ['./menu-restaurante.page.scss'],
})
export class MenuRestaurantePage implements OnInit {

  idRestaurante :string;
  nombreRes:string;
  direccionRes:string;
  telefonoRes:string;
  ruta:string;

  constructor( public activatedRoute: ActivatedRoute, public http:HttpService, public route:Router) { 

    this.idRestaurante = this.activatedRoute.snapshot.paramMap.get('idRes');
    this.nombreRes = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.direccionRes = this.activatedRoute.snapshot.paramMap.get('direccion');
    this.telefonoRes = this.activatedRoute.snapshot.paramMap.get('telefono');
    this.ruta = this.activatedRoute.snapshot.paramMap.get('ruta');

    this.ruta = "http://avisositd.xyz/eneit/gifs/"+this.ruta;
    console.log("Lo que esta llegando "+this.idRestaurante+" "+this.nombreRes+this.direccionRes+this.telefonoRes);

    this.traerMenu(this.idRestaurante);
  }

  ngOnInit() {
  }

  menu:any;
  traerMenu(id:string){
    this.http.traerMenu(id).then(
      (inv) => { 
       console.log(inv);  
       this.menu = inv;   


      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

  comprar(idProd:any,nombre:string,des:string,precio:string){

   
    this.route.navigateByUrl("/compra/"+this.idRestaurante+"/"+idProd+"/"+nombre+"/"+des+"/"+precio);
  }

}
