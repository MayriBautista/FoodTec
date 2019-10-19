import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpService } from '../http.service';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  idUsuario: string;
  nombre: string;
  telefono: string;
  email: string;
  pass: string;


  ngOnInit() { }


  constructor(public http: HttpmayriService, public httpS: HttpService,
    private storage: Storage, public toastController: ToastController, public route: Router,
    public alertCtrl: AlertController) {

    storage.get("idUsuario").then((val) => {
      console.log('idUsuario', val);
      this.idUsuario = val;
      this.traerPerfil(this.idUsuario);
    });
    storage.get("password").then((val) => {
      console.log('contra', val);
      this.pass = val;

    });
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }

  usuario: any;

  traerPerfil(id: string) {
    this.httpS.traerPerfil(id).then(
      (inv) => {
        console.log(inv);
        this.usuario = inv;
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }


}
