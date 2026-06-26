import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caritas } from './caritas';

describe('Caritas', () => {
  let component: Caritas;
  let fixture: ComponentFixture<Caritas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caritas],
    }).compileComponents();

    fixture = TestBed.createComponent(Caritas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
