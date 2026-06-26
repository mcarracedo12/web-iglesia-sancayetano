import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liturgia } from './liturgia';

describe('Liturgia', () => {
  let component: Liturgia;
  let fixture: ComponentFixture<Liturgia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liturgia],
    }).compileComponents();

    fixture = TestBed.createComponent(Liturgia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
