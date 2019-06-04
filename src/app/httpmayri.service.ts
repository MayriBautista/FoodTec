import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpmayriService {

  constructor(public http:HttpClient) { }

  login(correo:string, contra:string) {

    var url = 'http://avisositd.xyz/mobiliaria/login/'+contra+'/'+correo;
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
}
