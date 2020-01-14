import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cajas-ahorro-pesos',
  templateUrl: './detalle-cajas-ahorro-pesos.component.html',
  styleUrls: ['./detalle-cajas-ahorro-pesos.component.scss']
})
export class CajasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  copiar='COPIAR DATOS';
  
  copied(){
    this.copiar ='COPIADOS !'
  }

}
