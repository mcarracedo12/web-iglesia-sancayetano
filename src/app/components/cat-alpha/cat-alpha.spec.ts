import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAlpha } from './cat-alpha';

describe('CatAlpha', () => {
  let component: CatAlpha;
  let fixture: ComponentFixture<CatAlpha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatAlpha],
    }).compileComponents();

    fixture = TestBed.createComponent(CatAlpha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
