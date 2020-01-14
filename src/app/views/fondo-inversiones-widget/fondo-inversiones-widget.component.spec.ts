import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoInversionesWidgetComponent } from './fondo-inversiones-widget.component';

describe('FondoInversionesWidgetComponent', () => {
  let component: FondoInversionesWidgetComponent;
  let fixture: ComponentFixture<FondoInversionesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoInversionesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoInversionesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
