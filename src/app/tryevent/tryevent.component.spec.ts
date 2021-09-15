import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryeventComponent } from './tryevent.component';

describe('TryeventComponent', () => {
  let component: TryeventComponent;
  let fixture: ComponentFixture<TryeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
