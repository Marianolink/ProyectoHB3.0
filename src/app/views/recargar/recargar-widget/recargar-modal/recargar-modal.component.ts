import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, 
        keyframes,
        group, sequence,
        query, stagger, animateChild,
        animation, useAnimation, } from '@angular/animations';

@Component({
  selector: 'app-recargar-modal',
  templateUrl: './recargar-modal.component.html',
  styleUrls: ['./recargar-modal.component.scss'],
  animations: [
    trigger('back', [
      state('out', style({
        opacity: '0',
        visibility:'hidden',
       })),
      state('in', style({
        opacity: '1',
        visibility:'visible',
       })),
      transition('out => in', animate('300ms ease-in-out')),
      transition('in => out', animate('300ms ease-in-out'))
    ]),
    trigger('paso0', [
      state('inactive', style({
        opacity: '1',
        visibility:'visible',
        position:'static',
        transform: 'scale(1) translateY(0px)'
       })),
      state('active', style({
        opacity: '0',
        visibility:'hidden',
        position:'absolute',
        transform: 'scale(1) translateY(-100px)'
       })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ]),
    trigger('paso1', [
      state('nada', style({
        opacity: '0',
        position:'absolute',
        visibility:'hidden',
        transform: 'scale(1) translateY(-100px)'        
       })),
      state('aparece', style({
        opacity: '1',
        position:'static',
        visibility:'visible',
        transform: 'scale(1) translateY(0px)'
       })),
      transition('nada => aparece', animate('300ms ease-in-out')),
      transition('aparece => nada', animate('300ms ease-in-out'))
    ]),
    trigger('paso2', [
      state('nada', style({
        opacity: '0',
        position:'absolute',
        visibility:'hidden',
        transform: 'scale(1) translateY(-100px)'        
       })),
      state('aparece', style({
        opacity: '1',
        position:'static',
        visibility:'visible',
        transform: 'scale(1) translateY(0px)'
       })),
      transition('nada => aparece', animate('300ms ease-in-out')),
      transition('aparece => nada', animate('300ms ease-in-out'))
    ]),
    trigger('paso3', [
      state('nada', style({
        opacity: '0',
        position:'absolute',
        visibility:'hidden',
        transform: 'scale(1) translateY(-100px)'        
       })),
      state('aparece', style({
        opacity: '1',
        position:'static',
        visibility:'visible',
        transform: 'scale(1) translateY(0px)'
       }))
       ,
      transition('nada => aparece', animate('300ms ease-in-out')),
      transition('aparece => nada', animate('300ms ease-in-out'))
    ]),
    trigger('end', [
      state('nada', style({
        opacity: '0',
        position:'absolute',
        visibility:'hidden',
        transform: 'scale(1) translateX(-200px)'        
       })),
      state('aparece', style({
        opacity: '1',
        position:'static',
        visibility:'visible',
        transform: 'scale(1) translateX(0px)'
       }))
       ,
      transition('nada => aparece', animate('300ms ease-in-out')),
      transition('aparece => nada', animate('300ms ease-in-out'))
    ])
  ]
})


export class RecargarModalComponent implements OnInit {
  paso0: String = 'inactive'
  paso1: String = 'nada'
  paso2: String = 'nada'
  paso3: String = 'nada'
  back: String = 'out'
  end: String = 'nada'
  


  constructor() {}

  result:string = '';
  pas:string = '';

   toggleState() {    
    const inputValue = (<HTMLInputElement>document.getElementById("counter")).value;
    this.result = inputValue


      if(this.result == '10'){
        this.paso0 = 'active'
        this.paso1 = 'nada'
        this.paso2 = 'aparece'
        this.paso3 = 'nada'
        this.pas = '20'
      }else if(this.result == '20'){
        this.paso0 = 'active'
        this.paso1 = 'nada'
        this.paso2 = 'nada'
        this.paso3 = 'aparece'
        this.pas = '30'
        
      }else if(this.result == '30'){
        this.paso0 = 'active'
        this.paso1 = 'nada'
        this.paso2 = 'nada'
        this.paso3 = 'nada'
        this.end = 'aparece'
        this.pas = '40'
        this.back = 'out'
      }
      else if(this.result == '40'){
        this.paso0 = 'inactive'
        this.paso1 = 'nada'
        this.paso2 = 'nada'
        this.paso3 = 'nada'
        this.end = 'nada'
        this.pas = '0'
        this.back = 'out'
      }
      else{
        this.paso0 = 'active'
        this.paso1 = 'aparece'
        this.paso2 = 'nada'
        this.paso3 = 'nada'
        this.pas = '10'
        this.back = 'in'
      }


    (<HTMLInputElement>document.getElementById("counter")).value = this.pas;
    
  }



  toggleBack(){
    const inputValue = (<HTMLInputElement>document.getElementById("counter")).value;
    this.result = inputValue

    
    if(this.result == '10'){
      this.paso0 = 'inactive'
      this.paso1 = 'nada'
      this.paso2 = 'nada'
      this.paso3 = 'nada'
      this.pas = '0'
      this.back = 'out'
    }
    else if(this.result == '20'){
      this.paso0 = 'active'
      this.paso1 = 'aparece'
      this.paso2 = 'nada'
      this.paso3 = 'nada'
      this.pas = '10'
    }
    else if(this.result == '30'){
      this.paso0 = 'active'
      this.paso1 = 'nada'
      this.paso2 = 'aparece'
      this.paso3 = 'nada'
      this.pas = '20'
    }
    else{

    }

    (<HTMLInputElement>document.getElementById("counter")).value = this.pas;

  }

  ngOnInit() {
  }

  

}
