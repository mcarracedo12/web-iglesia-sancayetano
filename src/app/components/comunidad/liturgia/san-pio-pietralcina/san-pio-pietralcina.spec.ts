import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPioPietralcina } from './san-pio-pietralcina';

describe('SanPioPietralcina', () => {
  let component: SanPioPietralcina;
  let fixture: ComponentFixture<SanPioPietralcina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanPioPietralcina],
    }).compileComponents();

    fixture = TestBed.createComponent(SanPioPietralcina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
