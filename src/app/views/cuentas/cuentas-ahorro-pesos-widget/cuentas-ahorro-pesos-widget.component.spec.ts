import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasAhorroPesosWidgetComponent } from './cuentas-ahorro-pesos-widget.component';

describe('CuentasAhorroPesosWidgetComponent', () => {
  let component: CuentasAhorroPesosWidgetComponent;
  let fixture: ComponentFixture<CuentasAhorroPesosWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasAhorroPesosWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasAhorroPesosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
