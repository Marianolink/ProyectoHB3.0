import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargarUltimasWidgetComponent } from './recargar-ultimas-widget.component';

describe('RecargarUltimasWidgetComponent', () => {
  let component: RecargarUltimasWidgetComponent;
  let fixture: ComponentFixture<RecargarUltimasWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarUltimasWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargarUltimasWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
