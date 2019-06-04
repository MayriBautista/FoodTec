import { Component, OnInit } from '@angular/core';
import { HttpmayriService } from '../httpmayri.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string; 
  contra: string;
  inicio() {
    console.log(this.correo+this.contra);
    this.http.login(this.correo,this.contra).then(
      (inv) => {
        console.log(inv);
        var id=inv['id'];
        if(id!=0){
          
        }else {
          //toastcontroller
        }
      },
      (error) => {
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );
  }
  constructor(public http:HttpmayriService) { }

  ngOnInit() {
  }

}
