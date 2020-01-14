import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosVencimientosWidgetComponent } from './proximos-vencimientos-widget.component';

describe('ProximosVencimientosWidgetComponent', () => {
  let component: ProximosVencimientosWidgetComponent;
  let fixture: ComponentFixture<ProximosVencimientosWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosVencimientosWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosVencimientosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
