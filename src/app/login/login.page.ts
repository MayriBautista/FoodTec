import { Component, OnInit } from '@angular/core';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string; 
  contra: string;
  
  constructor(public http:HttpmayriService, private storage: Storage, public toastController: ToastController, public route: Router) { 
   
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contraseña y/o usuario incorrecto',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {   }
  registro(){
    this.route.navigateByUrl('/registro');
  }

 /* inicio() {
    console.log(this.correo+this.contra);
    this.http.login(this.correo,this.contra).then(
      (inv) => {
        console.log(inv);
        var resultado = inv['estatus'];
        var id=inv['idUsuario'];

        if(resultado =! 1){
          this.presentToast();
        } else {
          this.storage.set('idUsuario', id);
          this.route.navigateByUrl('/home');
        }
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }
  */

  inicio() {
    console.log(this.correo+this.contra);
    this.http.login(this.correo,this.contra).then(
      (inv) => {
        console.log('recibo: '+inv);
       var id=inv['idUsuario'];
      if(id!=0){
        var estado=inv['resultado'];
        if(estado!="Cuenta desativada"){

           // set a key/value
          this.storage.set('idUsuario', id);
          this.route.navigateByUrl('/home');
      }
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
}
