import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargarModalComponent } from './recargar-modal.component';

describe('RecargarModalComponent', () => {
  let component: RecargarModalComponent;
  let fixture: ComponentFixture<RecargarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
