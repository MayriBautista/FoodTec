import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpConexion = "http://foodtec.mobi-fest.com/";

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

  traerRestaurantes(){
    
   
    var url = this.httpConexion + 'restaurant';
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
