import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  login(usuario:string, contra:string){
    let datos = { usuario:usuario, contra:contra}
  
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
 
    //alert(usuario+contra);
   
   var url = 'http://avisositd.xyz/mobiliaria/loginMobiliaira.php/'
   return new Promise((resolve, reject) => {
    this.http.post(url,JSON.stringify(datos),options)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);    
        });
   });
  }

  registro(usuario:string, contra:string, correo:string, telefono:string){
    
   
   var url = 'http://avisositd.xyz/mobiliaria/loginMobiliaira.php?usuario='+usuario+'&contra='+contra;
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
