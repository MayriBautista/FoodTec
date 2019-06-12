import { Component, OnInit } from '@angular/core';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string; 
  contra: string;
  
  constructor(public http:HttpmayriService, public toastController: ToastController, public route: Router) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contraseña y/o usuario incorrecto',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }
  registro(){
    this.route.navigateByUrl('/registro');
  }

  inicio() {
    console.log(this.correo+this.contra);
    this.http.login(this.correo,this.contra).then(
      (inv) => {
        console.log(inv);
        var id=inv['idUsuario'];
        if(id!=0){
          this.route.navigateByUrl('/home/'+id);
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
