import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCreditosWidgetComponent } from './tarjetas-creditos-widget.component';

describe('TarjetasCreditosWidgetComponent', () => {
  let component: TarjetasCreditosWidgetComponent;
  let fixture: ComponentFixture<TarjetasCreditosWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetasCreditosWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasCreditosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
