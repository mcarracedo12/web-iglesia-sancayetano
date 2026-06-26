import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensual7 } from './mensual7';

describe('Mensual7', () => {
  let component: Mensual7;
  let fixture: ComponentFixture<Mensual7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensual7],
    }).compileComponents();

    fixture = TestBed.createComponent(Mensual7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
