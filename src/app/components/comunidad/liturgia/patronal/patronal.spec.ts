import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patronal } from './patronal';

describe('Patronal', () => {
  let component: Patronal;
  let fixture: ComponentFixture<Patronal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patronal],
    }).compileComponents();

    fixture = TestBed.createComponent(Patronal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
