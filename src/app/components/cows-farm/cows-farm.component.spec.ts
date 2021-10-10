import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsFarmComponent } from './cows-farm.component';

describe('CowsFarmComponent', () => {
  let component: CowsFarmComponent;
  let fixture: ComponentFixture<CowsFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowsFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CowsFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
