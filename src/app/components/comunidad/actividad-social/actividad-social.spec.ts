import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadSocial } from './actividad-social';

describe('ActividadSocial', () => {
  let component: ActividadSocial;
  let fixture: ComponentFixture<ActividadSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadSocial],
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadSocial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
