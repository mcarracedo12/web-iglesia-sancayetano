import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensual23 } from './mensual23';

describe('Mensual23', () => {
  let component: Mensual23;
  let fixture: ComponentFixture<Mensual23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensual23],
    }).compileComponents();

    fixture = TestBed.createComponent(Mensual23);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
