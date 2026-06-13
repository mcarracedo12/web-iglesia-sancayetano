import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMatrimonios } from './cat-matrimonios';

describe('CatMatrimonios', () => {
  let component: CatMatrimonios;
  let fixture: ComponentFixture<CatMatrimonios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatMatrimonios],
    }).compileComponents();

    fixture = TestBed.createComponent(CatMatrimonios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
