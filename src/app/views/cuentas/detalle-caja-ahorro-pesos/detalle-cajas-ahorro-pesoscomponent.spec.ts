import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasComponent } from './detalle-cajas-ahorro-pesos.component';

describe('CajasComponent', () => {
  let component: CajasComponent;
  let fixture: ComponentFixture<CajasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class CajasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const divBody = document.getElementById("body");
    divBody.classList.add("white");
  }

  public toogleTitle(){
    
    $(".titulo_card").slideToggle();
  }
}

