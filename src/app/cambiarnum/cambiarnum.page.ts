import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cambiarnum',
  templateUrl: './cambiarnum.page.html',
  styleUrls: ['./cambiarnum.page.scss'],
})
export class CambiarnumPage implements OnInit {

  numNew:string;
  idUsuario:string;
  pass:string;

  constructor(public activatedRoute: ActivatedRoute,public http:HttpmayriService, 
    private storage: Storage, public toastController: ToastController, public route: Router,
    public alertCtrl: AlertController) { 
   
    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      
    });
    storage.get("password").then((val) => {
      console.log('contra', val);
      this.pass = val;
      
    });

  }

    verificarDatos(){
      if(this.numNew == undefined){
         this.mensajeToast("Campo vacio");
         return
      } 
      this.confirmarContra();
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
       var password =inv['password'];
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


  async confirmarContra(){
    
    
    let alert = this.alertCtrl.create({
      header: 'Confirmación',
      subHeader: 'Ingrese su contraseña',
      inputs: [
        {
          name: 'password',
          placeholder: 'Ingrese su contraseña',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            if ( data.password == this.pass) {
              this.actualizar();
            } else {
              this.mensajeToast('Contraseña incorrecta')
              return false;
            }
          }
        }
      ]
    });
    (await alert).present();
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
