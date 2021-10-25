import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccBarComponent } from './acc-bar.component';

describe('AccBarComponent', () => {
  let component: AccBarComponent;
  let fixture: ComponentFixture<AccBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
