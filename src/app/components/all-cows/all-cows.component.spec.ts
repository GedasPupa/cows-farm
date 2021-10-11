import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCowsComponent } from './all-cows.component';

describe('AllCowsComponent', () => {
  let component: AllCowsComponent;
  let fixture: ComponentFixture<AllCowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
