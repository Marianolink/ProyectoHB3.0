import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosPersonalWidgetComponent } from './prestamos-personal-widget.component';

describe('PrestamosPersonalWidgetComponent', () => {
  let component: PrestamosPersonalWidgetComponent;
  let fixture: ComponentFixture<PrestamosPersonalWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamosPersonalWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosPersonalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
