import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  
  login(){
    this.router.navigate(['/home']);
  }
  
  registro(){

    const div2 = document.getElementById("elementIngreso");
    div2.classList.add("out1");
    const div3 = document.getElementById("elementRegistro");
    div3.classList.add("out2");

      setTimeout(function() {
        const div9 = document.getElementById("elementIngreso");
        div9.classList.add("ocultar");
        const div1 = document.getElementById("registro");
        div1.classList.add("select");
        const div4 = document.getElementById("registro");
        div4.classList.remove("gris");
        const div5 = document.getElementById("login");
        div5.classList.add("gris");
        const div10 = document.getElementById("login");
        div10.classList.remove("select");
        const div8 = document.getElementById("elementIngreso2");
        div8.classList.remove("ocultar");
        const div11 = document.getElementById("elementIngreso2");
        div11.classList.add("in2");
        const div12 = document.getElementById("elementRegistro");
        div12.classList.add("ocultar");
        const div15 = document.getElementById("elementRegistro");
        div15.classList.add("in1");
        const div13 = document.getElementById("elementReg");
        div13.classList.remove("ocultar");
        const div14 = document.getElementById("elementReg");
        div14.classList.add("in1");

        setTimeout(function() {
          const div16 = document.getElementById("elementIngreso");
          div16.classList.remove("out1");
          const div17 = document.getElementById("elementRegistro");
          div17.classList.remove("out2");
          const div18 = document.getElementById("elementIngreso");
          div18.classList.remove("in2");
          const div19 = document.getElementById("elementRegistro");
          div19.classList.remove("in1");
        }, 800);

      }, 400);

  }

  log(){

    const div1 = document.getElementById("elementIngreso2");
    div1.classList.remove("in2");
    const div2 = document.getElementById("elementIngreso2");
    div2.classList.add("out1");
    const div3 = document.getElementById("elementReg");
    div3.classList.add("out2");
    const div4 = document.getElementById("elementReg");
    div4.classList.remove("in1");

      setTimeout(function() {
        const div9 = document.getElementById("elementIngreso2");
        div9.classList.add("ocultar");
        const div1 = document.getElementById("registro");
        div1.classList.remove("select");
        const div6 = document.getElementById("registro");
        div6.classList.add("gris");
        const div5 = document.getElementById("login");
        div5.classList.remove("gris");
        const div10 = document.getElementById("login");
        div10.classList.add("select");
        const div8 = document.getElementById("elementIngreso");
        div8.classList.remove("ocultar");
        const div11 = document.getElementById("elementIngreso");
        div11.classList.add("in2");
        const div12 = document.getElementById("elementRegistro");
        div12.classList.remove("ocultar");
        const div13 = document.getElementById("elementReg");
        div13.classList.add("ocultar");
        const div19 = document.getElementById("elementRegistro");
        div19.classList.add("in1");

        setTimeout(function() {
          const div14 = document.getElementById("elementReg");
          div14.classList.remove("in1");
          const div16 = document.getElementById("elementIngreso");
          div16.classList.remove("out1");
          const div17 = document.getElementById("elementRegistro");
          div17.classList.remove("out2");
          const div19 = document.getElementById("elementRegistro");
          div19.classList.remove("in1");
          const div18 = document.getElementById("elementIngreso");
          div18.classList.remove("in2");
        }, 800);

      }, 400);

  }

}




