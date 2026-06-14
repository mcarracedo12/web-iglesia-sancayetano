import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Santeria } from './santeria';

describe('Santeria', () => {
  let component: Santeria;
  let fixture: ComponentFixture<Santeria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Santeria],
    }).compileComponents();

    fixture = TestBed.createComponent(Santeria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
