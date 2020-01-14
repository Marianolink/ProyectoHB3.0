import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdelantoHaberesWidgetComponent } from './adelanto-haberes-widget.component';

describe('AdelantoHaberesWidgetComponent', () => {
  let component: AdelantoHaberesWidgetComponent;
  let fixture: ComponentFixture<AdelantoHaberesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdelantoHaberesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdelantoHaberesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
