import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazoFijoWidgetComponent } from './plazo-fijo-widget.component';

describe('PlazoFijoWidgetComponent', () => {
  let component: PlazoFijoWidgetComponent;
  let fixture: ComponentFixture<PlazoFijoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlazoFijoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlazoFijoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
