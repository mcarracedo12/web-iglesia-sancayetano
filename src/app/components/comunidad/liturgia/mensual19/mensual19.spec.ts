import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensual19 } from './mensual19';

describe('Mensual19', () => {
  let component: Mensual19;
  let fixture: ComponentFixture<Mensual19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensual19],
    }).compileComponents();

    fixture = TestBed.createComponent(Mensual19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
