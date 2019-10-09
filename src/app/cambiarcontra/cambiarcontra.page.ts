import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpmayriService } from '../httpmayri.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {

  contraAct:string;
  contraNew:string;
  repContraNew:string;

  constructor(public activatedRoute: ActivatedRoute,public http:HttpmayriService, private storage: Storage, public toastController: ToastController, public route: Router) { 
    this.contraAct = this.activatedRoute.snapshot.paramMap.get('password');
   

    console.log("Lo que esta llegando "+this.contraAct);
    if (this.contraAct != ""){
      this.actualizar(this.contraAct);
    }
  }

  menu:any;
  actualizar(contra){
    this.http.cambiarContra(this.contraNew).then(
      (inv) => { 
       console.log(inv);  
       this.menu = inv;   
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }
  
  ngOnInit() {
  }

}
