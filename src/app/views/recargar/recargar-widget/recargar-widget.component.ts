import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-recargar-widget',
  templateUrl: './recargar-widget.component.html',
  styleUrls: ['./recargar-widget.component.scss'],
  animations: [
    trigger('modalFade', [
      state('inactive', style({
        opacity: '0'
       })),
      state('active', style({
        opacity: '1'
       })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ])
  ]

})
export class RecargarWidgetComponent implements OnInit {

  icons = [
    { name: 'arrow-left', class: 'big' },
   
  ]
  
  modalFade: String = 'inactive'

  constructor() { }

  toggleModal(){
    this.modalFade = this.modalFade === 'active' ? 'inactive' : 'active'

  }

  toggleCross(){
    this.modalFade = this.modalFade === 'inactive' ? 'active' : 'inactive'
  }

  ngOnInit() {
    
  }

  alertMensaje(e){
    if(confirm("Desea eliminar la recarga"+name)) {
      var x = document.getElementsByClassName('personal');
      var i;
      for (i = 0; i < x.length; i++) 
      {
        x[i].className += ' remove';
      }
      document.getElementById("personal-success").classList.add('add');
    }
  };
  
  close(alert){
    document.getElementById("personal-success").classList.add('remove');
  }

  removerTodos(evento) {
    var x = document.getElementsByClassName('liRecarga');
    var i;
    for (i = 0; i < x.length; i++) 
    {
      x[i].className += ' remove';
    }
  }
  
  
}
