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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Correo incorrecto',
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
        if(email!=""){

           // set a key/value
          this.storage.set('email', this.correo);
          this.route.navigateByUrl('/desactivarcuenta/'+this.correo);
        }else {
          this.presentToast();
        }
      },
      (error) => {
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }


//  constructor() { }

}
