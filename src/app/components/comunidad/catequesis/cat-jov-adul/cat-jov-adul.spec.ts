import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatJovAdul } from './cat-jov-adul';

describe('CatJovAdul', () => {
  let component: CatJovAdul;
  let fixture: ComponentFixture<CatJovAdul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatJovAdul],
    }).compileComponents();

    fixture = TestBed.createComponent(CatJovAdul);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
