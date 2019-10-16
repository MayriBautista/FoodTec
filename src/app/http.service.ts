import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  idUsuario:string;


  //httpConexion = "https://itd-foodtec.000webhostapp.com/foodtec/";
  httpConexion = "http://127.0.0.1:8000/";
  constructor(public storage: Storage,public http:HttpClient) { 

  }

 

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

  login( contra:string, correo:string){
   
    var url = this.httpConexion + 'login/'+correo+'/'+contra;
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

   traerPerfil(valor:string){
    var url = this.httpConexion + 'perfil/'+valor;
   // console.log(url);
    return new Promise((resolve, reject) => {
     this.http.get(url)
     .subscribe(data => {
       resolve(data);
       //console.log(data);
         }, (err) =>{
           reject(err);    
         });
    });
   }

}
