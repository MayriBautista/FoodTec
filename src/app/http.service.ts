import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpConexion = "https://itd-foodtec.000webhostapp.com/foodtec/";

  constructor(public http:HttpClient) { }

 

  registro(usuario:string, contra:string, correo:string, telefono:string){
    
   
   var url = this.httpConexion + 'insertar/'+usuario+'/'+correo+'/'+contra+'/'+telefono;
   return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);    
        });
   });
  }

  traerRestaurantes(valor:string){

    var url = this.httpConexion + 'restaurante/'+valor;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);    
         });
    });
   }


   traerMenu(valor:string){

    var url = this.httpConexion + 'productos/'+valor;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);    
         });
    });
   }

}
