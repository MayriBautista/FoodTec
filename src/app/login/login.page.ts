import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
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
  
  constructor( public http:HttpService, private storage: Storage, public toastController: ToastController, public route: Router) { 
   
  }

  async mensaje() {
    const toast = await this.toastController.create({
      message: 'Cuenta desactivada.',
      duration: 2000
    });
    toast.present();
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

 inicio() {
    console.log(this.correo+this.contra);
    this.http.login(this.correo,this.contra).then(
      (inv) => {
        console.log(inv);
        var id=inv['idUsuario'];

          this.storage.set('idUsuario', id);
          if(id != 0){
            if(id == -1){
              this.mensaje();
            } else {
              this.route.navigateByUrl('/home');
            }
          } else {
            this.presentToast();
          }
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }
  
/*
  inicio() {
    console.log(this.correo+this.contra);
    this.http.login(this.correo,this.contra).then(
      (inv) => {
        console.log('recibo: '+inv);
       var id=inv['idUsuario'];
   //   if(id!=0){
        var estado=inv['resultado'];
        if(estado!="Cuenta desativada"){

           // set a key/value
          this.storage.set('idUsuario', id);
          this.route.navigateByUrl('/home');
      }
        // }else {
        //   this.presentToast();
        // }
      },
      (error) => {
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }*/
}
