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

  insertarPedido(idPago:string, idUsuario:string, idRestaurante:string, totalPedido:string, instrucciones:string, especificaciones:string) {

    var envio =this.url+'registrarPedido/'+idPago+'/'+idUsuario+'/'+idRestaurante+'/'+totalPedido+'/'+instrucciones+'/'+especificaciones;
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
