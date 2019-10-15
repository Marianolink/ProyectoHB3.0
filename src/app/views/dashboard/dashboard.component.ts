import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
// declare var jQuery: any;
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const divBody = document.getElementById("body");
    divBody.classList.add("white");
  }

  // public toogleTitle(){
    
  //   $(".titulo_card").slideToggle();
  // }
}
