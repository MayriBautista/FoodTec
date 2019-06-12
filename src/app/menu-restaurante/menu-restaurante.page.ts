import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor( public activatedRoute: ActivatedRoute, public http:HttpService) { 

    this.idRestaurante = this.activatedRoute.snapshot.paramMap.get('idRes');
    this.nombreRes = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.direccionRes = this.activatedRoute.snapshot.paramMap.get('direccion');
    this.telefonoRes = this.activatedRoute.snapshot.paramMap.get('telefono');
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

}
