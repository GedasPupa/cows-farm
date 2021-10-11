import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCowComponent } from './one-cow.component';

describe('OneCowComponent', () => {
  let component: OneCowComponent;
  let fixture: ComponentFixture<OneCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
