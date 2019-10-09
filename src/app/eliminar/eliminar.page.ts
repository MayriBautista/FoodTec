import { Component, OnInit } from '@angular/core';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  ngOnInit(){
    
  }

    correo: string;

  constructor(public http:HttpmayriService, private storage: Storage, public toastController: ToastController, public route: Router) { 
  
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  desactivar() {
    console.log(this.correo);
    this.http.desactiva(this.correo).then(
      (inv) => {
        console.log(inv);
        var email=inv['email'];
      //  if(email == 'verificar'){
       //   this.presentToast("El correo es incorrecto");
       // } else {
        if(email == 'no existe'){
          this.presentToast("El correo no existe");
        }else {
          this.route.navigateByUrl('login');
        }
     // }
      },
      (error) => {
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }


//  constructor() { }

}
