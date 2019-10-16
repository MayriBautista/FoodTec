import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {

  password:string;
  idUsuario:string;
  contraAct:string;
  contraNew:string;
  repContraNew:string;

  constructor(public activatedRoute: ActivatedRoute,public http:HttpmayriService, private storage: Storage, public toastController: ToastController, public route: Router) { 

    this.contraAct = this.activatedRoute.snapshot.paramMap.get('password');
   
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      
    });

  }

    verificarDatos(){

      if(this.contraAct == undefined || this.contraNew == undefined || this.repContraNew == undefined){
         this.mensajeToast("Uno a mas campos estan vacios");
  
         return
      } 
  
      if(this.contraNew != this.repContraNew){
        this.mensajeToast("Las contraseñas no coiciden");
        return
      }

      this.actualizar();
  }


  actualizar(){
    this.cambiarContra(this.idUsuario,this.contraAct,this.contraNew);
  }

  usuarios:any;
  cambiarContra(id:string,contraAct:string, contraNew:string){
    this.http.cambiarContra(id,contraAct,contraNew).then(
      (inv) => { 
       console.log(inv);  
       this.usuarios = inv;   
       var estatus = inv['password'];
       if(estatus == "wrong"){
          this.mensajeToast('La contraseña actual no coincide con nuestro registro');
        } else {
          this.mensajeToast('Contraseña actualizada');
          this.route.navigateByUrl('/home');
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
  
  ngOnInit() {
  }

}
