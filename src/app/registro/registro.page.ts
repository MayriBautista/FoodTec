import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:string;
  correo:string;
  contra:string;
  repiteContra:string;
  telefono:string;
  teminosCheck:boolean = false;


  constructor(public toastController:ToastController, public http:HttpService, public route: Router) { }

  ngOnInit() {
  }

  verificarDatos(){

    if(this.usuario == undefined || this.correo == undefined || this.telefono == undefined || this.contra == undefined || this.repiteContra == undefined){
       this.mensajeToast("Uno a mas campos estan vacios");

       return
    }

    if(this.contra != this.repiteContra){
      this.mensajeToast("Las contraseñas no coiciden");
      return
    }

    if(this.teminosCheck == true){
      this.mensajeToast("no has aceptado los terminos y condiciones de uso de nuestra APP");
      return
    }

    this.registrarUsuario();

  }

  registrarUsuario(){

    this.http.registro(this.usuario, this.contra, this.correo, this.telefono).then(
      (inv) => { 
       console.log(inv);     

       var resultado;

       resultado = inv['resultado'];

       if(resultado == "insertado"){

        this.route.navigateByUrl('/login');

        this.mensajeToast("Bienvenido Amig@ "+this.usuario);

       }else{
         this.mensajeToast("A ocurrido un error intenta mas tarde, o verifica tu conexion a internet");
       }
    
         
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }


  async mensajeToast(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }

}
