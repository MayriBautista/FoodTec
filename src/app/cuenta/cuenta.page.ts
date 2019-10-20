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


  constructor(public http: HttpmayriService, public https: HttpService,
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

  verificarDatos() {
    if (this.nombre == undefined) {
      this.mensajeToast("Campo vacio");
      return
    }
    this.confirmarContra();
  }

  actualizar() {
    this.cambiarNom(this.idUsuario, this.nombre);
  }

  usuarios: any;
  cambiarNom(id: string, nombre: string) {
    this.http.cambiarNom(id, nombre).then(
      (inv) => {
        console.log(inv);
        this.usuarios = inv;
        var estatus = inv['nombre'];
        var password = inv['password'];
        console.log(estatus);
        if (estatus == "error") {
          this.mensajeToast('Ha ocurrido un error, intente más tarde.');
        } else {
          this.mensajeToast('Nombre actualizado');
          this.route.navigateByUrl('/home');
        }
      },
      (error) => {
        console.log("Error" + JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

  usuario: any;

  traerPerfil(id: string) {
    this.https.traerPerfil(id).then(
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



  async confirmarContra() {


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
            if (data.password == this.pass) {
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
}
