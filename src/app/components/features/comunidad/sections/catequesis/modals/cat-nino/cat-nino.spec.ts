import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNino } from './cat-nino';

describe('CatNino', () => {
  let component: CatNino;
  let fixture: ComponentFixture<CatNino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatNino],
    }).compileComponents();

    fixture = TestBed.createComponent(CatNino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
