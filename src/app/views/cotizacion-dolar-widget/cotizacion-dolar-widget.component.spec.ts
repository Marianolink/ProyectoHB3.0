import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionDolarWidgetComponent } from './cotizacion-dolar-widget.component';

describe('CotizacionDolarWidgetComponent', () => {
  let component: CotizacionDolarWidgetComponent;
  let fixture: ComponentFixture<CotizacionDolarWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionDolarWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionDolarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
