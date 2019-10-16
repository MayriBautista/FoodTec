import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cambiarnum',
  templateUrl: './cambiarnum.page.html',
  styleUrls: ['./cambiarnum.page.scss'],
})
export class CambiarnumPage implements OnInit {

  numNew:string;
  idUsuario:string;

  constructor(public activatedRoute: ActivatedRoute,public http:HttpmayriService, 
    private storage: Storage, public toastController: ToastController, public route: Router) { 
   
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      
    });

  }

    verificarDatos(){
      if(this.numNew == undefined){
         this.mensajeToast("Campo vacio");
         return
      } 
      this.actualizar();
  }

  actualizar(){
    this.cambiarNum(this.idUsuario,this.numNew);
  }

  usuarios:any;
  cambiarNum(id:string,numNew:string){
    this.http.cambiarNum(id,numNew).then(
      (inv) => { 
       console.log(inv);  
       this.usuarios = inv;   
       var estatus = inv['telefono'];
       console.log(estatus);
        if(estatus == "error"){
          this.mensajeToast('Ha ocurrido un error, intente más tarde.');
        } else {
          this.mensajeToast('Número actualizado');
          this.route.navigateByUrl('/cuenta');
        }
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

  ngOnInit() {
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
