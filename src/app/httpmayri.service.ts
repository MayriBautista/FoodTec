import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpmayriService {



  url: String = "http://foodtec.mobi-fest.com/";
  constructor(public http:HttpClient) { }

  login(correo:string, contra:string) {

    var envio =this.url+'login/'+contra+'/'+correo;
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
  
}
