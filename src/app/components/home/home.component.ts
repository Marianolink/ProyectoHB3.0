import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
// declare var jQuery: any;
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const divBody = document.getElementById("body");
    divBody.classList.add("white");
  }

  // public toogleTitle(){
    
  //   $(".titulo_card").slideToggle();
  // }
}
