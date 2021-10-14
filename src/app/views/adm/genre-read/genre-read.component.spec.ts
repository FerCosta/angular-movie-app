import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreReadComponent } from './genre-read.component';

describe('GenreReadComponent', () => {
  let component: GenreReadComponent;
  let fixture: ComponentFixture<GenreReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
