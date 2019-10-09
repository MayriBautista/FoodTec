import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpmayriService {
  actualizar(contra:string) {
    throw new Error("Method not implemented.");
  }



  //url: String = "https://itd-foodtec.000webhostapp.com/foodtec/";
 url:String = "http://127.0.0.1:8000/";
  constructor(public http:HttpClient) { }

  

  cambiarContra(contra:string) {
    var envio =this.url+'updateContra/'+contra;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  insertarPedido(idUsuario:string, idRestaurante:string, idProducto:string, precio:string, idPago:string, especificaciones:string, totalc:string, ubicacion:string, cantidad:string) {
                                          
    var envio =this.url+'insertarPedido/'+idUsuario+'/'+idRestaurante+'/'+idProducto+'/'+precio+'/'+idPago+'/'+especificaciones+'/'+cantidad+"/"+totalc+'/'+ubicacion;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  
  desactiva(correo:string) {
    var envio =this.url+'desactivarCuenta/'+correo;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
}
