import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpmayriService {
  
  
  //url: String = "https://itd-foodtec.000webhostapp.com/foodtec/";
  url:String = "http://127.0.0.1:8000/";
  constructor(public http:HttpClient) { }
  
  
  cambiarNombre(id: string, nombre: string) {
    var envio = this.url+'updateNombre/'+id+'/'+nombre;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  cambiarContra(id:string,contraAct:string,contraNew:string) {
    var envio =this.url+'updateContra/'+id+'/'+contraAct+'/'+contraNew;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  cambiarNum(id:string,numNew:string) {
    var envio =this.url+'updateTel/'+id+'/'+numNew;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  cambiarNom(id:string,nombre:string) {
    var envio =this.url+'updateNombre/'+id+'/'+nombre;
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


  traerPedidos(id: string) {
    var envio =this.url+'pedidos/'+id;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  traerPedidosComp(id: string) {
    var envio =this.url+'pedidosEntregados/'+id;
    return new Promise((resolve, reject) => {
      this.http.get(envio)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  traerPedidosPend(id: string) {
    var envio =this.url+'pedidosPendientes/'+id;
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
