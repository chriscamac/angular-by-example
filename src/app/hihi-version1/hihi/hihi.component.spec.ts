import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HihiComponent } from './hihi.component';

describe('HihiComponent', () => {
  let component: HihiComponent;
  let fixture: ComponentFixture<HihiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HihiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HihiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
