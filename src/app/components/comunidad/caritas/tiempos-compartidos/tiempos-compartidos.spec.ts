import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiemposCompartidos } from './tiempos-compartidos';

describe('TiemposCompartidos', () => {
  let component: TiemposCompartidos;
  let fixture: ComponentFixture<TiemposCompartidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiemposCompartidos],
    }).compileComponents();

    fixture = TestBed.createComponent(TiemposCompartidos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
