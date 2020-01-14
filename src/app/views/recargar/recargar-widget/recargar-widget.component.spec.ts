import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargarWidgetComponent } from './recargar-widget.component';

describe('RecargarWidgetComponent', () => {
  let component: RecargarWidgetComponent;
  let fixture: ComponentFixture<RecargarWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
