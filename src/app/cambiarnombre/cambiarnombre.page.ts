import { Component, OnInit } from '@angular/core';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarnombre',
  templateUrl: './cambiarnombre.page.html',
  styleUrls: ['./cambiarnombre.page.scss'],
})
export class CambiarnombrePage implements OnInit {


  //   HOLA, MAYRI!
  // El botón debe ser (click)="verificarDatos()"



  pass: string;
  nuevoNombre:string; //[(ngModel)]="nuevoNombre"  ← eso ponlo en el input y listo, debería funcionar
  idUsuario:string;

  constructor(public http: HttpmayriService,
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

  ngOnInit() {
  }


  verificarDatos() {
    if ( this.nuevoNombre == undefined) {
      this.mensajeToast("El campo no puede estar vacío");
      return
    }
    this.confirmarContra();
  }


  actualizar() {
    this.cambiarNombre(this.idUsuario, this.nuevoNombre);
  }

  usuarios: any;

  cambiarNombre(id: string, nombre: string) {
    this.http.cambiarNombre(id, nombre).then(
      (inv) => {
        console.log(inv);
        this.usuarios = inv;
        var nombre = inv['nombre'];
       console.log(nombre);
        if (nombre == "error") {
          this.mensajeToast('No se pudo actualizar el nombre.');
        } else {
          this.mensajeToast('Nombre actualizado actualizado');
          this.route.navigateByUrl('/home');
        }
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

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();

  }
}
