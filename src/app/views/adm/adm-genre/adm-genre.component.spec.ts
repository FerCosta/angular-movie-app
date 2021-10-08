import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmGenreComponent } from './adm-genre.component';

describe('AdmGenreComponent', () => {
  let component: AdmGenreComponent;
  let fixture: ComponentFixture<AdmGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
