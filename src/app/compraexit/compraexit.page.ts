import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compraexit',
  templateUrl: './compraexit.page.html',
  styleUrls: ['./compraexit.page.scss'],
})
export class CompraexitPage implements OnInit {

  cantidad:string;
  total:string;
  nombre:string;

  constructor(public route: Router, public activatedRoute:ActivatedRoute) { 

    this.cantidad = this.activatedRoute.snapshot.paramMap.get('cantidad');
    this.total = this.activatedRoute.snapshot.paramMap.get('total');
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');

  }

  ngOnInit() {
  }

  menu(){
    this.route.navigateByUrl('/home');
  }
}
