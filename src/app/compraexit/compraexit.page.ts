import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compraexit',
  templateUrl: './compraexit.page.html',
  styleUrls: ['./compraexit.page.scss'],
})
export class CompraexitPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  menu(){
    this.route.navigateByUrl('/menu-restaurante');
  }
}
