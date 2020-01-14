import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class navegacionComponent implements OnInit {

  icons = [
    { name: 'credit-card', class: 'big' },
    { name: 'grid', class: 'big' },
   
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
