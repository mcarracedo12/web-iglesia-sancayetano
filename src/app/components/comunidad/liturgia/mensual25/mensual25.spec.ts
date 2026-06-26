import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensual25 } from './mensual25';

describe('Mensual25', () => {
  let component: Mensual25;
  let fixture: ComponentFixture<Mensual25>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensual25],
    }).compileComponents();

    fixture = TestBed.createComponent(Mensual25);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
