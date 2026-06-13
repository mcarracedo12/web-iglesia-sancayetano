import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdol } from './cat-adol';

describe('CatAdol', () => {
  let component: CatAdol;
  let fixture: ComponentFixture<CatAdol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatAdol],
    }).compileComponents();

    fixture = TestBed.createComponent(CatAdol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
