import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPreaprobadosWidgetComponent } from './productos-preaprobados-widget.component';

describe('ProductosPreaprobadosWidgetComponent', () => {
  let component: ProductosPreaprobadosWidgetComponent;
  let fixture: ComponentFixture<ProductosPreaprobadosWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosPreaprobadosWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPreaprobadosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
