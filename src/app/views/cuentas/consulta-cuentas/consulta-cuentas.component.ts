import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-consulta-cuentas',
  templateUrl: './consulta-cuentas.component.html',
  styleUrls: ['./consulta-cuentas.component.scss'],
  animations: [
    trigger('acordeonFade', [
      state('inactive', style({
        opacity:'0',
        visibility:'hidden',
        transform:'translateY(0px)',
        height:'auto',
        maxHeight:'0px'
        
       })),
      state('active', style({
        opacity:'1',
        visibility:'visible',
        transform:'translateY(0px)',
        maxHeight:'200px'
       })),
      transition('inactive => active', animate('300ms ease-out')),
      transition('active => inactive', animate('300ms ease-out'))
    ]),
    trigger('chevron', [
      state('active', style({
        transform: 'rotate(270deg)'        
      })),
      state('inactive', style({

        transform: 'rotate(90deg)'
      })),
      transition('inactive => active', animate('200ms ease-out')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),

/*--------------CAJAS ACTIVE--------------- */

  trigger('mainPesos', [
    state('active', style({
      boxShadow:'0 0 10px 0 #3791A9'      
    })),
    state('inactive', style({
      boxShadow:'0 0 0px 0 #3791A9' 
    })),
    transition('inactive => active', animate('180ms ease-out')),
    transition('active => inactive', animate('180ms ease-out'))
  ]),

  trigger('mainDolares', [
    state('active', style({
      boxShadow:'0 0 10px 0 #3791A9'      
    })),
    state('inactive', style({
      boxShadow:'0 0 0px 0 #3791A9' 
    })),
    transition('inactive => active', animate('180ms ease-out')),
    transition('active => inactive', animate('180ms ease-out'))
  ]),

/*------------SLIDER ANIMATIONS--------------*/
    trigger('arrow', [
      state('active', style({
        transform: 'translateX(-2px) rotate(180deg)'        
      })),
      state('inactive', style({

        transform: 'translateX(0px) rotate(0deg)'
      })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ]),
    trigger('slider1', [
      state('active', style({
        transform: 'translateX(-672px)'        
      })),
      state('inactive', style({

        transform: 'translateX(0px)'
      })),
      transition('inactive => active', animate('400ms ease-in-out')),
      transition('active => inactive', animate('400ms ease-in-out'))
    ]),



    /*--------MODAL GRAL-------- */
    trigger('modalFade', [
      state('inactive', style({
        opacity: '0'
       })),
      state('active', style({
        opacity: '1'
       })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ]),




    /*--------MODALES-------- */
    trigger('modalAlias', [
      state('inactive', style({
        opacity: '0',
        display:'none'
       })),
      state('active', style({
        opacity: '1',
        display:'block'
       })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ]),

    trigger('modalCo', [
      state('inactive', style({
        opacity: '0',
        display:'none'
       })),
      state('active', style({
        opacity: '1',
        display:'block'
       })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ]),

    trigger('modalPedidos', [
      state('inactive', style({
        opacity: '0',
        display:'none'
       })),
      state('active', style({
        opacity: '1',
        display:'block'
       })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ])



  ]
})
export class ConsultaCuentasComponent implements OnInit {
  chevron: String = 'inactive';
  acordeonFade: String = 'inactive';
  icons = [
    { name: 'chevron-right', class: 'big' },
   
  ]
  modalFade: String = 'inactive'
  modalAlias:String = 'inactive'
  modalCo:String = 'inactive'
  modalPedidos:String = 'inactive'

  constructor() { }

  ngOnInit() {
  }


  toggleModal(){
    this.modalFade = 'active'

  }

  toggleCross(){
    this.modalFade = 'inactive',
    this.modalAlias = 'inactive',
    this.modalCo = 'inactive',
    this.modalPedidos = 'inactive'
  }

  toggleAlias(){
    this.modalAlias = 'active'
  }

  toggleCo(){
    this.modalCo = 'active'
  }

  togglePedidos(){
    this.modalPedidos = 'active'
  }


  /*---------ACORDION--------- */

  accordion(){
    this.acordeonFade = this.acordeonFade === 'active' ? 'inactive' : 'active'
    this.chevron = this.chevron === 'active' ? 'inactive' : 'active'
  }
  
  myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }



  /*---------MOVIMIENTOS (Animacion con CSS)--------- */
  mainPesos: String = 'active';
  mainDolares:String = 'inactive';


  cajaPesos(){
    var x = document.getElementsByClassName('cajaDol');
    for (var i = 0; i < x.length; i++) {
      x[i].classList.add('fade-out')
      x[i].classList.remove('fade-in')
    }
    
    var x = document.getElementsByClassName('cajaPesos');
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('fade-out')
      x[i].classList.add('fade-in')
    }
    this.mainPesos = 'active'
    this.mainDolares = 'inactive'

  }

  cajaDolares(){
    var x = document.getElementsByClassName('cajaPesos');
    for (var i = 0; i < x.length; i++) {
      x[i].classList.add('fade-out')
      x[i].classList.remove('fade-in')
    }

    var x = document.getElementsByClassName('cajaDol');
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('fade-out')
      x[i].classList.add('fade-in')
    }
  
    this.mainPesos = 'inactive'
    this.mainDolares = 'active'

  }
  

  /*----------CAROUSEL-----------*/ 
  arrow: String = 'inactive';
  slider1: String = 'inactive'
  paso1: String = 'nada'
  paso2: String = 'nada'
  paso3: String = 'nada'
  result:string = '';
  pas:string = '';

   toggleState() {    
    const inputValue = (<HTMLInputElement>document.getElementById("counter")).value;
    this.result = inputValue


      if(this.result == '10'){
        this.slider1 = 'active'
        this.pas = '20'
      }
      else if(this.result == '20'){
        this.arrow = 'inactive'
        this.slider1 = 'inactive'
        this.pas = '0'
      }
      else{
        this.arrow = 'active'
        this.slider1 = 'active'
        this.pas = '10'
      }


    (<HTMLInputElement>document.getElementById("counter")).value = this.pas;
    
  }


}
