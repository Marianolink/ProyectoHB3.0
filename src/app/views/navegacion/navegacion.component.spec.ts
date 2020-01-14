import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { navegacionComponent } from './navegacion.component';

describe('navegacionComponent', () => {
  let component: navegacionComponent;
  let fixture: ComponentFixture<navegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ navegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(navegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
